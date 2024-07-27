import { useRef, useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../../../redux/task/action";

function EditTarefaModal({ isOpenEdit, setIsOpenEdit, task }) {
  const { id, nome, descricao, dificuldade, status, ultimaModificacao } = task;

  //metodos do useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const modalRef = useRef();

  //Confirmar envio da tarefa
  const handleEditarSubmitClick = (data) => {
    if (data.nome === "" || data.nome === null) {
      data.nome = nome;
    }

    if (data.dificuldade === "0"|| data.dificuldade === null ) {
        data.dificuldade = dificuldade;
    }
    const updatedTask = {
      ...data,
      id: id,
      status: status,
      ultimaModificacao: "data da modificação",
    };

    dispatch(editTask(updatedTask));
    reset({
      nome: null,
      descricao: null,
      dificuldade: "0",
    });

    setIsOpenEdit(false);
  };

  //verifica se clicou fora do modal
  //se sim, o modal vai ser fechado
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      reset({
        nome: null,
        descricao: null,
        dificuldade: "0",
      });
      setIsOpenEdit(false);
    }
  };

  if (!isOpenEdit) return null;
  return (
    <>
      <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal-content" ref={modalRef}>
          <h1>Editar Tarefa</h1>

          <div className="form-group">
            <label>Nome da Tarefa</label>
            <input
              className={errors?.nome && "input-error"}
              type="text"
              placeholder={`" ${nome} "`}
              {...register("nome")}
            />

            <label>Descrição da Tarefa</label>
            <input
              type="text"
              placeholder="Insira o descrição da tarefa aqui..."
              {...register("descricao")}
            />

            <label>Dificuldade da Tarefa</label>
            <select {...register("dificuldade", {})}>
              <option value="0">Selecione uma Opção</option>
              <option value="facil">Fácil</option>
              <option value="medio">Médio</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>
          <button onClick={() => handleSubmit(handleEditarSubmitClick)()}>
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default EditTarefaModal;
