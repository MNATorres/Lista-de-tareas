import { useState } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState("")
  const [list, setList] = useState([])

  let actualizar = (e) => {
    setText(e.currenTarjet.value)
  }

  let agregar = () => {
    setList([...list, {title: text, value: false}])
    setText("")
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
        <button>Reset</button>
      </form>
      <ul>
        {list.map((elemento) => {
          return <li>{elemento.title}</li>
        } )}
      </ul>
    </div>
  );
}

export default App;
