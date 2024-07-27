import { useRef } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import {useSelector, useDispatch} from "react-redux"
import { addTask } from "../../../redux/task/action";

function DeleteTarefaModal({ isOpenDelete, setisOpenDelete }) {

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
  const handleDeletarSubmitClick = (data) => {
    dispatch(removeTask(data));
    reset({
      nome: null,
      descricao: null,
      dificuldade: "0",
    });

    setisOpenDelete(false);
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
      setisOpenDelete(false);
    }
  };

  if (!isOpenDelete) return null;
  return (
    <>
      <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal-content" ref={modalRef}>
          <h1>Adicionar Tarefa</h1>

          <div className="form-group">
            <label>* Nome da Tarefa</label>
            <input
              className={errors?.nome && "input-error"}
              type="text"
              placeholder="Insira o nome da tarefa aqui..."
              {...register("nome", { required: true })}
            />
            {errors?.nome?.type === "required" && (
              <p className="text-error">O nome da tarefa é Obrigatório</p>
            )}

            <label>Descrição da Tarefa</label>
            <input
              type="text"
              placeholder="Insira o descrição da tarefa aqui..."
              {...register("descricao")}
            />

            <label>Dificuldade da Tarefa</label>
            <select
              className={errors?.dificuldade && "input-error"}
              {...register("dificuldade", {
                validate: (value) => {
                  return value !== "0";
                },
              })}
            >
              <option value="0">Selecione uma Opção</option>
              <option value="facil">Fácil</option>
              <option value="medio">Médio</option>
              <option value="dificil">Difícil</option>
            </select>
            {errors?.dificuldade?.type && (
              <p className="text-error">Selecione o nivel de dificuldade</p>
            )}
          </div>

          {console.log({ errors })}

          <button onClick={() => handleSubmit(handleDeletarSubmitClick)()}>
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteTarefaModal;
