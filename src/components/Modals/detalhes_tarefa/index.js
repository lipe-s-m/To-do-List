import { useRef } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { editTask } from "../../../redux/task/action";
import { obterDataHora } from "../adicionar_tarefa";

function DetailsTarefaModal({ isOpenDetails, setIsOpenDetails, task }) {
  const {
    nome,
    descricao,
    dificuldade,
    status,
    dataCriacao,
    ultimaModificacao,
  } = task;

  const dispatch = useDispatch();

  const modalRef = useRef();

  //marcar como concluida
  const handleSubmitConcluidaClick = () => {
    const updatedTask = {
      ...task,
      status: "concluida",
      ultimaModificacao: obterDataHora(),
    };
    dispatch(editTask(updatedTask));

    setIsOpenDetails(false);
  };

  //marcar como concluida
  const handleSubmitPendenteClick = () => {
    const updatedTask = {
      ...task,
      status: "pendente",
      ultimaModificacao: obterDataHora(),
    };
    dispatch(editTask(updatedTask));

    setIsOpenDetails(false);
  };

  //verifica se clicou fora do modal
  //se sim, o modal vai ser fechado
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpenDetails(false);
    }
  };

  if (!isOpenDetails) return null;
  return (
    <>
      <div className="modal-overlay-details" onClick={handleClickOutside}>
        <div className="modal-content-details" ref={modalRef}>
          <h1>Detalhes da Tarefa</h1>

          <div className="form-group">
            <label>Nome da Tarefa</label>
            <p className="placeholder">{nome}</p>

            <label>Data de criação:</label>
            <p className="placeholder">{dataCriacao}</p>

            <label>Descrição da Tarefa</label>
            <p className="placeholder">{descricao}</p>

            <label>Dificuldade da Tarefa</label>
            <p className="placeholder">{dificuldade}</p>

            <label>Ultima modificação</label>
            <p className="placeholder">{ultimaModificacao}</p>
          </div>

          {status === "pendente" ? (
            <button
              className={"button-select confirm-button"}
              onClick={handleSubmitConcluidaClick}
            >
              Marcar como concluida
            </button>
          ) : (
            <button
              className={"button-select cancel-button"}
              onClick={handleSubmitPendenteClick}
            >
              Marcar como pendente
            </button>
          )}

          <button
            className="voltar-button"
            onClick={() => setIsOpenDetails(false)}
          >
            Voltar
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsTarefaModal;
