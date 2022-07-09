import { useState } from "react";
import Elemento from "./Elemento";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let actualizar = (e) => {
    setText(e.currentTarget.value);
  };

  let handleAdd = () => {
    setList([...list, { title: text, value: true, id: Math.random() }]);
    setText("");
  };

  let handleDelete = (elemento) => {
    setList(
      list.filter((lista) => {
        return elemento.id !== lista.id;
      })
    );
  };

  let handleReset = () => {
    setList([]);
  };

  let handleEdit = (newList) => {
    setList(
      list.map((oldList) => {
        if (newList.id !== oldList.id) return oldList;
        return newList;
      })
    );
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={text}
          onChange={actualizar}
          type="text"
          placeholder="Escriba aquí..."
        />
        <button onClick={handleAdd}>Añadir</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <ul>
        {list.map((elemento) => {
          return (
            <li key={elemento.id}>
              <Elemento
                elemento={elemento}
                edit={handleEdit}
                handleDelete={() => handleDelete(elemento)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
