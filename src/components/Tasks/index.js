import descButton from "./../../ui/Icons/descricao-button.png";
import editButton from "./../../ui/Icons/editar-button.png";
import deleteButton from "./../../ui/Icons/delete-button.png";
import "./index.css";

function Tasks({title, description, urgency}) {
  return (
    <>
      <div className="task">
        <div id="task-left">
          <h2>{title}</h2>
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
            />
          </span>
          <span className="actions-texts">
            <p>Descrição</p> <p>Editar</p> <p>Excluir</p>
          </span>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Tasks;
