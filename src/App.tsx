import { useState } from "react";
import { Container, Area, Header } from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar coisas", done: false },
    { id: 2, name: "Vender tudo coisas", done: false },
  ]);

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  function handleTaskStatus(id: number, done: boolean) {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskStatus} />
        ))}
      </Area>
    </Container>
  );
}

export default App;
