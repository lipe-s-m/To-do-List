import "./index.css";
import filterIcon from "./../../ui/Icons/filter.png";
import findIcon from "./../../ui/Icons/lupa.png";
import Tasks from "../Tasks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddTarefaModal from "../Modals/adicionar_tarefa";

function Body() {
  const [isOpenAdd, setisOpenAdd] = useState(false);
  const [filterValue, setFilterValue] = useState("0");
  const [findValue, setFindValue] = useState(null);
  const list = useSelector((rootReducers) => rootReducers.taskReducer.tasks);
  const [filterList, setFilterList] = useState(list);

  const handleClickFilter = (value) => {
    setFilterValue(value);
    if (value !== "0") {
      setFilterList(list.filter((task) => task.status === value));
      console.log(filterList);
      return;
    }
    setFilterList(list);
  };

  const handleFilterText = (value) => {
    console.log(value + " <= value ... finder .> " + findValue)
    if (value !== null ) {
      console.log(findValue)
      console.log(value.length)
      setFilterList(filterList.filter((task) => task.nome === value));
      setFindValue(null);
      return;
    }
    setFindValue(null);
    setFilterList(list);
  };

  useEffect(() => {
    setFilterList(list);
  }, [list]);

  return (
    <>
      {console.log({ list })}
      {console.log({ filterList })}

      <section className="body-background">
        <AddTarefaModal isOpenAdd={isOpenAdd} setisOpenAdd={setisOpenAdd} />

        <div className={isOpenAdd ? "container blurred" : "container"}>
          <label id="filters">
            <div className="filter-select find">
              <input
                placeholder="Filtrar pelo nome..."
                onChange={(event) => {
                  console.log("tem coisa aq hein");
                  setFindValue(event.target.value);
                  console.log(
                    event.target.value +
                      " <- event..target  -- findd => " +
                      findValue
                  );
                }}
              ></input>
              <img
                className="icons"
                src={findIcon}
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
            onClick={(e) => {
              setFilterValue("0"), setisOpenAdd(true);
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
