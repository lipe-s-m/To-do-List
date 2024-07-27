import "./index.css";
import filterIcon from "./../../ui/Icons/filter.png";
import Tasks from "../Tasks";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddTarefaModal from "../Modals/adicionar_tarefa";
import DeleteTarefaModal from "../Modals/excluir-tarefa";

function Body() {
  const [isOpenAdd, setisOpenAdd] = useState(false);
  const [isOpenDelete, setisOpenDelete] = useState(false);
  const [isOpenEdit, setisOpenEdit] = useState(false);

  const lista = useSelector((rootReducers) => rootReducers.taskReducer.tasks);
  const list = lista.filter(task => task.nome !== null)
  const adicionarTarefa = () => {
    setisOpenAdd(true);
    console.log(list)
  };



  return (
    <>
      <section className="body-background">
      <AddTarefaModal isOpenAdd={isOpenAdd} setisOpenAdd={setisOpenAdd} />
      <DeleteTarefaModal isOpenDelete={isOpenDelete} setisOpenDelete={setisOpenDelete} />

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
              nome={task.nome}
              descricao={task.descricao}
              dificuldade={task.dificuldade}
            />
          ))}

          <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        </div>
      </section>
    </>
  );
}
export default Body;
