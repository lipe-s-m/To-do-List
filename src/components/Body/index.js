import "./index.css";
import filterIcon from "./../../ui/Icons/filter.png";
import Tasks from "../Tasks";
import { useState } from "react";
import AddTarefaModal from "../Modals/adicionar_tarefa";

function Body() {
  const [list, setList] = useState([
    {
      title: "Tarefa 1",
      description: null,
      difficulty: null,
      status: null,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const adicionarTarefa = () => {
    setIsOpen(true);
  };

  return (
    <>
      <section className="body-background">
        <AddTarefaModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          list={list}
          setList={setList}
        />

        <div className={isOpen ? "container blurred" : "container"}>
          <label id="filters">
            <img className="icons" src={filterIcon} alt="Ícone de filtro" />
            <p>Filtrar</p>
            <select>
              <option value="0">Todas</option>
              <option value="concluida">Concluídas</option>
              <option value="pendente">Pendentes</option>
            </select>
          </label>
          {list.map((task, index) => (
            <Tasks
              key={index}
              title={task.title}
              description={task.description}
              difficulty={task.difficulty}
            />
          ))}

          <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        </div>
      </section>
    </>
  );
}
export default Body;
