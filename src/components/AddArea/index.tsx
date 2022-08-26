import { useState, KeyboardEvent } from "react";
import { Container } from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function handleSubmit(e: KeyboardEvent) {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <Container>
      <button onClick={handleSubmit} type="button">
        ➕
      </button>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => inputChange(e)}
        onKeyUp={handleSubmit}
      ></input>
    </Container>
  );
};
