import "./index.css";
import filterIcon from "./../../ui/Icons/filter.png";
import Tasks from "../Tasks";
import { useEffect, useState } from "react";
import AddTarefaModal from "../Modals/adicionar_tarefa";

function Body() {
  const [list, setList] = useState([
    {
      title: "Tarefa 1",
      description: null,
      urgency: null,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log("Aberto");
    }
  }, [isOpen]);

  const adicionarTarefa = () => {
    setIsOpen(!isOpen);
    setList([
      ...list,
      {
        title: "Limpar coco do gato MANO SKSKSKSKSKSKSKSKSK",
        description: "oi",
        urgency: "cie",
      },
    ]);
    console.log(isOpen);
  };

  return (
    <>
      <section className="body-background">
        <AddTarefaModal isOpen={isOpen} />
        <div className="container">
          <div id="filters">
            <p>Filtrar</p>
            <img className="icons" src={filterIcon} alt="Ícone de filtro" />
          </div>
          {list.map((task, index) => (
            <Tasks
              key={index}
              title={task.title}
              description={task.description}
              urgency={task.urgency}
            />
          ))}

          <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        </div>
      </section>
    </>
  );
}
export default Body;
