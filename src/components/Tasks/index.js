import descButton from "./../../ui/Icons/descricao-button.png";
import editButton from "./../../ui/Icons/editar-button.png";
import deleteButton from "./../../ui/Icons/delete-button.png";
import "./index.css";
import DeleteTarefaModal from "../Modals/excluir_tarefa";
import { useState } from "react";
import EditTarefaModal from "../Modals/editar_tarefa";
import DetailsTarefaModal from "../Modals/detalhes_tarefa";

function Tasks(props) {
  const { id, nome, descricao, dificuldade, dataCriacao, status, ultimaModificacao } =
    props;

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  return (
    <>
      <DeleteTarefaModal
        isOpenDelete={isOpenDelete}
        setIsOpenDelete={setIsOpenDelete}
        id={id}
      />
      <EditTarefaModal
        isOpenEdit={isOpenEdit}
        setIsOpenEdit={setIsOpenEdit}
        task={props}
      />
      <DetailsTarefaModal
        isOpenDetails={isOpenDetails}
        setIsOpenDetails={setIsOpenDetails}
        task={props}
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
          <p className="data">{dataCriacao}</p>
        </div>
        <div id="actions">
          <span className="actions-icons">
            <img
              className="icons"
              src={descButton}
              alt="Icone dos detalhes da tarefa"
              onClick={(e) => setIsOpenDetails(true)}
            />
            <img
              className="icons"
              src={editButton}
              alt="Icone de edição da tarefa"
              onClick={(e) => setIsOpenEdit(true)}
            />
            <img
              className="icon-delete"
              src={deleteButton}
              alt="Icone de excluir a tarefa"
              onClick={(e) => setIsOpenDelete(true)}
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
