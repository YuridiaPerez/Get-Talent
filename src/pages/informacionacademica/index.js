import React, { useState } from "react"
import Navbar from "components/Navbar"
import style from "./style-informacionacademica.module.scss"

export const InformacionAcademica = () => {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("El formulario se ha enviado")
    console.log({ ...form })
  }
  return (
    <div className={style.container}>
      <pre>
        <div className={style.containerForm}>
          <form onSubmit={handleSubmit}>
            <p>Título</p>
            <input
              className={`${style.input1} `}
              required
              type="text"
              id="titulo"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
            />
            <p>Institución educativa</p>
            <input
              className={`${style.input1} `}
              required
              type="text"
              id="escuela"
              name="escuela"
              value={form.escuela}
              onChange={handleChange}
            />
            <div className={style.columna}>
              <p>Duración</p>
              <input
                className={`${style.input} `}
                required
                type="text"
                id="duracion"
                name="duracion"
                value={form.duracion}
                onChange={handleChange}
              />
              <p>Nivel</p>
              <select
                className={`${style.inputSelect} `}
                required
                name="nivel"
                value={form.nivel}
                onChange={handleChange}
              >
                <option value="">- - - Selecciona una opción - - - </option>
                <option value="carreratecnica">Carrera Técnica</option>
                <option value="universidad">Universidad</option>
                <option value="maestria"> Maestría</option>
                <option value="doctorado"> Doctorado</option>
                <option value="curso"> Curso</option>
                <option value="certificacion"> Certificación</option>
              </select>
              <p>Estatus</p>
              <select
                className={`${style.inputSelect} `}
                required
                name="estatus"
                value={form.estatus}
                onChange={handleChange}
              >
                <option value="">- - - Selecciona una opción - - - </option>
                <option value="finalizado">Finalizado</option>
                <option value="trunco">Trunco</option>
                <option value="encurso"> En curso</option>
              </select>
            </div>
            <p>Breve descripción</p>
            <textarea
              className={`${style.textarea} `}
              name="descripcion"
              rows="10"
              cols="180"
              value={form.descripcion}
              onChange={handleChange}
            ></textarea>
            <br />
            <input type="submit" className={style.buttonSubmit} />
          </form>
        </div>
      </pre>
    </div>
  )
}
