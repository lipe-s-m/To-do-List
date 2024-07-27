import { useRef } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../../redux/task/action";

function DeleteTarefaModal({ isOpenDelete, setIsOpenDelete, id }) {
  const dispatch = useDispatch();

  const modalRef = useRef();

  //Confirmar exclusão da tarefa
  const handleDeletarSubmitClick = () => {
    dispatch(removeTask(id));
    setIsOpenDelete(false);
  };

  //verifica se clicou fora do modal
  //se sim, o modal vai ser fechado
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpenDelete(false);
    }
  };

  if (!isOpenDelete) return null;
  return (
    <>
      <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal-content" ref={modalRef}>
          <h1 className="text-red">Excluir Tarefa</h1>

          <p className="aviso">Tem certeza que deseja excluir essa tarefa?</p>

          <button className="confirm-button" onClick={handleDeletarSubmitClick}>
            Confirmar
          </button>
          <button
            className="cancel-button"
            onClick={() => setIsOpenDelete(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteTarefaModal;
