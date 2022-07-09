import { useState } from 'react';

function Elemento({ elemento, edit, handleDelete }) {

  const [editting, setEditting] = useState(false)
  const [text, setText] = useState(elemento.title)

  let handleEdit = () => {
    edit({ ...elemento, title: text });
    setEditting(false);
  }

  let handleCancel = () => {
    setEditting(false);
    setText(elemento.title);
  };

  return (
    <div>
      <input type='checkbox' />
      {!editting && elemento.title}
      {editting && (
        <>
          <input type="text"
            onChange={(e) => setText(e.currentTarget.value)}
            value={text} 
          />
          <button onClick={handleEdit}>ok</button>
          <button onClick={handleCancel}>cancel</button>
        </>
      )}
      {!editting && ( 
        <>
        <button onClick={() => setEditting(true)}>edit</button>
      <button onClick={() => handleDelete(elemento)}>x</button>
      </>
      )}
    </div>
  )
}

export default Elemento;