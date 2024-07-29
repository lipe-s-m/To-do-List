import { useRef, useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../../../redux/task/action";
import { obterDataHora } from "../adicionar_tarefa";

function EditTarefaModal({ isOpenEdit, setIsOpenEdit, task }) {
  const { id, nome, descricao, dificuldade, status, ultimaModificacao } = task;

  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const modalRef = useRef();

  const handleEditarSubmitClick = (data) => {
    if (
      data.nome === null &&
      data.descricao === null &&
      (data.dificuldade === "0" || data.dificuldade === null)
    ) {
      setIsOpenEdit(false);
      return;
    }
    if (data.nome === "" || data.nome === null) {
      data.nome = nome;
    }

    if (data.dificuldade === "0" || data.dificuldade === null) {
      data.dificuldade = dificuldade;
    }
    const updatedTask = {
      ...data,
      id: id,
      status: status,
      ultimaModificacao: obterDataHora(),
    };

    dispatch(editTask(updatedTask));
    reset({
      nome: null,
      descricao: null,
      dificuldade: "0",
    });

    setIsOpenEdit(false);
  };

 
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
              type="text"
              placeholder={`" ${nome} "`}
              {...register("nome")}
            />

            <label>Descrição da Tarefa</label>
            <input
              type="text"
              placeholder={`" ${descricao} "`}
              {...register("descricao")}
            />

            <label>Dificuldade da Tarefa</label>
            <select {...register("dificuldade", {})}>
              <option value="0">{`" Dificuldade atual: ${dificuldade} "`}</option>
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
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
