import { useRef } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/task/action";

export const obterDataHora = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const hora = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");

  const dataAtual = `${dia}/${mes}/${ano} - ${hora}:${minutos}`;
  return dataAtual;
};

function AddTarefaModal({ isOpenAdd, setisOpenAdd }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const modalRef = useRef();

  const handleAdicionarSubmitClick = (data) => {
    const newTask = {
      ...data,
      status: "pendente",
      dataCriacao: obterDataHora(),
      ultimaModificacao: obterDataHora(),
    };
    dispatch(addTask(newTask));
    reset({
      nome: null,
      descricao: null,
      dificuldade: "0",
    });
    setisOpenAdd(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      reset({
        nome: null,
        descricao: null,
        dificuldade: "0",
      });
      setisOpenAdd(false);
    }
  };

  if (!isOpenAdd) return null;
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
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>
            {errors?.dificuldade?.type && (
              <p className="text-error">Selecione o nivel de dificuldade</p>
            )}
          </div>
          <button onClick={() => handleSubmit(handleAdicionarSubmitClick)()}>
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTarefaModal;
