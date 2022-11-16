import { FaTrash } from "react-icons/fa";
import { Button } from "../Button";
import "./listItem.css";

export function ListItem({ title, deleteTask }) {
  return (
    <li>
      <span>{title}</span>
      <Button onClick={deleteTask}>
        <FaTrash size={20} color="#DC3545" />
      </Button>
    </li>
  );
}
