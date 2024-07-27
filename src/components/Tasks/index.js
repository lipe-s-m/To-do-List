import descButton from "./../../ui/Icons/descricao-button.png";
import editButton from "./../../ui/Icons/editar-button.png";
import deleteButton from "./../../ui/Icons/delete-button.png";
import "./index.css";
import DeleteTarefaModal from "../Modals/excluir-tarefa";
import { useState } from "react";

function Tasks({ index, nome, descricao, dificuldade, status }) {
  const [isOpenDelete, setisOpenDelete] = useState(false);

  return (
    <>
      <DeleteTarefaModal
        isOpenDelete={isOpenDelete}
        setisOpenDelete={setisOpenDelete}
        index={index}
      />

      <div
        className={
          status === "pendente"
            ? "task pendente"
            : status === "concluida"
            ? "task concluida"
            : ""
        }
      >
        <div id="task-left">
          {console.log(nome + status)}
          <h2
            className={
              status === "pendente"
                ? "pendente"
                : status === "concluida"
                ? "concluida"
                : ""
            }
          >
            {nome}
          </h2>
          <p className="data">25/07/2024 - 18:00</p>
        </div>
        <div id="actions">
          <span className="actions-icons">
            <img
              className="icons"
              src={descButton}
              alt="Icone de descrição da tarefa"
            />
            <img
              className="icons"
              src={editButton}
              alt="Icone de descrição da tarefa"
            />
            <img
              className="icon-delete"
              src={deleteButton}
              alt="Icone de descrição da tarefa"
              onClick={(e) => setisOpenDelete(true)}
            />
          </span>
          <span className="actions-texts">
            <p>Detalhes</p> <p>Editar</p> <p>Excluir</p>
          </span>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Tasks;
