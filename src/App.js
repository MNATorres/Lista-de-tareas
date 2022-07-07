import { useState } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState("")
  const [list, setList] = useState([])

  let actualizar = (e) => {
    setText(e.currentTarget.value)
  }

  let agregar = () => {
    setList([...list, {title: text, value: true}])
    setText("")
  }

  let eliminar = (i) => {
    setList(list.filter((_, j) =>{
      return i != j
    }))
  }

  let reset = () => {
    setList([])
  }

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
        value={text}
        onChange={actualizar}
        type="text" 
        placeholder="Escriba aquí.." />
        <button onClick={agregar}>Añadir</button>
        <button onClick={reset}>Reset</button>
      </form>
      <ul>
        {list.map((elemento, t) => {
          return (
          <li key={t}>
            <input type='checkbox'/>
            {elemento.title}
            <button onClick={() => eliminar(t)}>x</button>
          </li>
          )
        } )}
      </ul>
    </div>
  );
}

export default App;
