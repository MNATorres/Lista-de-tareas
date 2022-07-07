import { useState } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState("")
  const [list, setList] = useState([])

  let actualizar = (e) => {
    setText(e.currenTarjet.value)
  }

  return (
    <div className="App">
      <form>
        <input 
        value={text}
        onChange={actualizar}
        type="text" 
        placeholder="Escriba aquí.." />
        <button>Añadir</button>
        <button>Reset</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default App;
