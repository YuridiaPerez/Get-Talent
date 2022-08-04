import React, { useState } from "react"
import validator from "validator"
import Navbar from "components/Navbar"
import style from "./style-video.module.scss"

export const Video = () => {
  const [errorMessage, setErrorMessage] = useState("")

  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage(" ")
    } else {
      setErrorMessage("Lo sentimos, no es una URL válida.")
    }
  }

  return (
    <div className={style.container}>
      <pre>
        <div className={style.containerTitle}>
        </div>
        <p className={style.subtitle}>
          Agregar la URL del video donde este alojado:{" "}
        </p>
        <input
          className={style.inputURL}
          type="text"
          onChange={(e) => validate(e.target.value)}
        />
        <div className={style.divMensaje}>
          <span className={style.messageError}>{errorMessage}</span>
        </div>
        <input className={style.submit} type="submit" value="Guardar" />
      </pre>  
    </div>
  )
}
