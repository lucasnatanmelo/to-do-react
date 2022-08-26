import { useState } from "react";
import { Container } from "./styles";
import { Item } from "../../types/item";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  function handleCheckItem(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
    onChange(item.id, e.target.checked);
  }

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleCheckItem(e)}
      />
      <label>
        {item.name} - {item.done.toString()}
      </label>
    </Container>
  );
};
