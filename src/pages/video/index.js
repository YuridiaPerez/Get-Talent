import React, { useState } from "react";
import validator from 'validator';
  
export const Video = () => {
  
  const [errorMessage, setErrorMessage] = useState('')
    
  const validate = (value) => {
    
    if (validator.isURL(value)) {
      setErrorMessage('URL valida')
    } else {
      setErrorMessage('no es una URL')
    }
  }
  
  return (
    <div style={{
      marginLeft: '200px',
    }}>
      <pre>
        <h2>URL video presentación</h2>
        <span>Ingrese la URL correspondiente: </span><input type="text" 
        onChange={(e) => validate(e.target.value)}></input> <br />
        <input type="submit" value="Guardar"></input>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
      </pre>
    </div>
  );
}