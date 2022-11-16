import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";
import { TaskCounter } from "./components/TaskCounter";

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  function handleDeleteTask(id) {
    setTasksList((state) => state.filter((t) => t.id !== id));
  }

  function handleAddTask(e) {
    e.preventDefault();

    if (!task.length) {
      alert("Adicione uma descrição para criar a tarefa!");
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title: task,
    };

    setTasksList((state) => [...state, newTask]);
    setTask("");
  }

  return (
    <div className="container">
      <Header />

      <main>
        <form onSubmit={handleAddTask}>
          <Input
            placeholder="Descrição da tarefa"
            value={task}
            onChange={setTask}
          />

          <Button bgColor="#46A51E">
            <FaPlus size={24} color="#FFF" />
          </Button>
        </form>

        {tasksList.length ? (
          <div>
            <TaskCounter count={tasksList.length} />
            <ul className="tasks-list">
              {tasksList.map((task) => (
                <ListItem
                  title={task.title}
                  deleteTask={() => handleDeleteTask(task.id)}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="tasks-empty">
            <span>Sem tarefas cadastradas!</span>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
