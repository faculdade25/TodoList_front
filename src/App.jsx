import { useState } from "react";
import "./App.css";

const initialLists = [
  { name: "Minha lista", tasks: [{ title: "Desenhar Wireframes", status: "A fazer", priority: "Alta" }] },
  { name: "Trabalho", tasks: [{ title: "Desenvolver Backend", status: "A fazer", priority: "Média" }] },
  { name: "Casa", tasks: [{ title: "Testar Aplicação", status: "A fazer", priority: "Baixa" }] },
];

const statuses = ["A fazer", "Em Progresso", "Concluído"];
const priorities = ["Baixa", "Média", "Alta", "Urgente"];

export default function App() {
  const [lists, setLists] = useState(initialLists);
  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [filteredStatus, setFilteredStatus] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const selectedList = lists[selectedListIndex];

  const addTask = () => {
    if (newTask.trim()) {
      const updatedLists = [...lists];
      updatedLists[selectedListIndex].tasks.push({
        title: newTask,
        status: "A fazer",
        priority: "Baixa",
      });
      setLists(updatedLists);
      setNewTask("");
    }
  };

  const deleteTask = (taskIndex) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].tasks.splice(taskIndex, 1);
    setLists(updatedLists);
  };

  const updateTask = (taskIndex, field, value) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].tasks[taskIndex] = {
      ...updatedLists[selectedListIndex].tasks[taskIndex],
      [field]: value,
    };
    setLists(updatedLists);
  };

  const filterTasks = (status) => {
    setFilteredStatus(status);
  };

  const deleteList = () => {
    const updatedLists = lists.filter((_, index) => index !== selectedListIndex);
    setLists(updatedLists);
    setSelectedListIndex(0);
    setShowDeletePopup(false);
  };

  const displayedTasks = filteredStatus
    ? selectedList.tasks.filter((task) => task.status === filteredStatus)
    : selectedList.tasks;

  return (
    <div className="container">
      <div className="header">
        <h1>{selectedList.name}</h1>
        <div className="task-input">
          <div className="group-task-add">
            <input
              className="input-task"
              type="text"
              placeholder="Digite o nome da tarefa"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <button className="add-task" onClick={addTask}>
              Adicionar
            </button>
          </div>
          <button className="delete-page" onClick={() => setShowDeletePopup(true)}>
            Deletar Lista
          </button>
        </div>
      </div>

      {showDeletePopup && (
        <div className="popup">
          <p>Deseja deletar mesmo essa lista?</p>
          <button onClick={deleteList}>Sim</button>
          <button onClick={() => setShowDeletePopup(false)}>Não</button>
        </div>
      )}

      <div className="filter-task">
        <button className="filter-btn" onClick={() => filterTasks("A fazer")}>
          A Fazer
        </button>
        <button className="filter-btn" onClick={() => filterTasks("Em Progresso")}>
          Em Progresso
        </button>
        <button className="filter-btn" onClick={() => filterTasks("Concluído")}>
          Concluído
        </button>
        <button className="filter-btn" onClick={() => setFilteredStatus(null)}>
          Mostrar Todas
        </button>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Prioridade</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {displayedTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>
                <select
                  className={`status ${task.status.replace(/\s+/g, "-").toLowerCase()}`}
                  value={task.status}
                  onChange={(e) => updateTask(index, "status", e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  className={`priority ${task.priority.toLowerCase()}`}
                  value={task.priority}
                  onChange={(e) => updateTask(index, "priority", e.target.value)}
                >
                  {priorities.map((priority) => (
                    <option key={priority} value={priority}>
                      {priority}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button className="delete-task" onClick={() => deleteTask(index)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="list-menu">
        <h2>Listas</h2>
        {lists.map((list, index) => (
          <button key={index} onClick={() => setSelectedListIndex(index)}>
            {list.name}
          </button>
        ))}
      </div>
    </div>
  );
}
