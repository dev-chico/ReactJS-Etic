import "./taskCounter.css";

export function TaskCounter({ count }) {
  return (
    <div className="task-counter">
      <span>{count}</span>
      <span>{count === 1 ? "tarefa" : "tarefas"}</span>
    </div>
  );
}
