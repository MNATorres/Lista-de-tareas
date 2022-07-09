import { useState } from 'react';

function Elemento({elemento, handleEdit, handleDelete}) {
  return(
    <div>
      <input type='checkbox'/>
            {elemento.title}
            <button onClick={handleEdit}>edit</button>
            <button onClick={() => handleDelete(elemento)}>x</button>
    </div>
  )   
}

export default Elemento;