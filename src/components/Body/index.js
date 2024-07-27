import "./index.css";
import filterIcon from "./../../ui/Icons/filter.png";
import Tasks from "../Tasks";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddTarefaModal from "../Modals/adicionar_tarefa";

function Body() {
  const [isOpenAdd, setisOpenAdd] = useState(false);
  const [isOpenEdit, setisOpenEdit] = useState(false);

  const list = useSelector((rootReducers) => rootReducers.taskReducer.tasks);
  const filterList = list.filter((task) => task.status === "pendente")

  return (
    <>
      {console.log({list})}
      <section className="body-background">
      <AddTarefaModal isOpenAdd={isOpenAdd} setisOpenAdd={setisOpenAdd} />

        <div className={isOpenAdd ? "container blurred" : "container"}>
          <label id="filters">
            <img className="icons" src={filterIcon} alt="Ícone de filtro" />
            <p>Filtrar</p>
            <select>
              <option value="0">Todas</option>
              <option value="concluida">Concluídas</option>
              <option value="pendente">Pendentes</option>
            </select>
          </label>
          <hr className="divisor"></hr>
          {list.map((task, index) => (
            <Tasks
              key={index}
              index={index}
              nome={task.nome}
              descricao={task.descricao}
              dificuldade={task.dificuldade}
              status={task.status}
            />
          )) }

          <button onClick={(e) => setisOpenAdd(true)}>Adicionar Tarefa</button>
        </div>
      </section>
    </>
  );
}
export default Body;
