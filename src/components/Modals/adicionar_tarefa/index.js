import "./index.css";
function AddTarefaModal({ setIsOpen, isOpen }) {
  if (!isOpen) return null;
  const handleAdicionarSubmitClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h1>Adicionar Tarefa</h1>
          <button onClick={handleAdicionarSubmitClick}>
            Fecha esse bagulho
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTarefaModal;
