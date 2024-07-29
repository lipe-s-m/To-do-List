import "./index.css";
import filterIcon from "./../../ui/Icons/filter.png";
import findIcon from "./../../ui/Icons/lupa.png";
import clearFindIcon from "./../../ui/Icons/no-filter.png";
import Tasks from "../Tasks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddTarefaModal from "../Modals/adicionar_tarefa";

function Body() {
  const [isOpenAdd, setisOpenAdd] = useState(false);
  const [filterValue, setFilterValue] = useState("0");
  const [findValue, setFindValue] = useState("");
  
  // obtem lista de tarefas completa
  const list = useSelector((rootReducers) => rootReducers.taskReducer.tasks);
  
  const [filterList, setFilterList] = useState(list);
  
  // filtrar por pendente, concluido ou todas as tarefas
  const handleClickFilter = (value) => {
    setFilterValue(value);
    if (value !== "0") {
      setFilterList(list.filter((task) => task.status === value));
      return;
    }
    setFilterList(list);
  };

  // filtrar pelo nome da tarefa
  const handleFilterText = (value) => {
    if (value !== "") {
      if (list.some((task) => task.nome === value)) {
        setFilterList(list.filter((task) => task.nome === value));
        setFindValue("");
        return;
      }

      alert("Não existe tarefa com esse nome!");
      setFilterList(list);
      return;
    }
    setFindValue("");
    setFilterList(list);
  };

  //sempre que o redux mudar a lista, atualizar o filterList
  useEffect(() => {
    setFilterList(list);
  }, [list]);

  return (
    <>
      <section className="body-background">
        <AddTarefaModal isOpenAdd={isOpenAdd} setisOpenAdd={setisOpenAdd} />

        <div className={isOpenAdd ? "container blurred" : "container"}>
          <label id="filters">
            <div className="filter-select find">
              <input
                placeholder="Filtrar pelo nome..."
                onChange={(event) => {
                  setFindValue(event.target.value);
                }}
                value={findValue}
              />
              <img
                className="icons"
                src={filterList === list ? findIcon : clearFindIcon}
                alt="Ícone de filtro"
                onClick={() => handleFilterText(findValue)}
              />
            </div>
            <div className="filter-select">
              <img className="icons" src={filterIcon} alt="Ícone de filtro" />
              <p>Filtrar</p>
              <select
                value={filterValue}
                onChange={(event) => handleClickFilter(event.target.value)}
              >
                <option value="0">Todas</option>
                <option value="concluida">Concluídas</option>
                <option value="pendente">Pendentes</option>
              </select>
            </div>
          </label>
          <hr className="divisor"></hr>
          {filterList.map((task, index) => (
            <Tasks
              key={index}
              id={task.id}
              nome={task.nome}
              descricao={task.descricao}
              dificuldade={task.dificuldade}
              dataCriacao={task.dataCriacao}
              status={task.status}
              ultimaModificacao={task.ultimaModificacao}
            />
          ))}

          <button
            onClick={() => {
              setFilterValue("0");
              setisOpenAdd(true);
            }}
          >
            Adicionar Tarefa
          </button>
        </div>
      </section>
    </>
  );
}
export default Body;
