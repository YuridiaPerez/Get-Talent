import React, { useState } from "react"
import styles from "./style-experiencia.module.scss"

export const Experiencia = () => {
  const [form, setForm,valor,setvalor] = useState({})

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
    <div className={styles.container}>
      <div className={styles.containerTitle}></div>
      <br />
      <form onSubmit={handleSubmit}>
        <p>Cargo</p>
        <input
          className={`${styles.input1} `}
          required
          type="text"
          id="cargo"
          name="cargo"
          value={form.cargo}
          onChange={handleChange}
        />
        <br />
        <p>Tipo de empleo</p>
        <input
          className={`${styles.input1} `}
          type="text"
          id="tipoEmpleo"
          name="tipoEmpleo"
          value={form.tipoEmpleo}
          onChange={handleChange}
        />
        <br />
        <p>Nombre de la empresa</p>
        <input
          className={`${styles.input1} `}
          required
          type="text"
          id="nombreEmpresa"
          name="nombreEmpresa"
          value={form.nombreEmpresa}
          onChange={handleChange}
        />
        <div className={styles.columna}>
          <p>Ubicación</p>
          <input
            className={`${styles.input} `}
            required
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={form.ubicacion}
            onChange={handleChange}
          />
          <p>Sector</p>
          <input
            className={`${styles.input} `}
            required
            type="text"
            id="sector"
            name="sector"
            value={form.sector}
            onChange={handleChange}
          />
          <p>Fecha de inicio </p>
          <input
            className={`${styles.input} `}
            type="date"
            name="fecha1"
            id="fecha1"
            value={form.fecha1}
            onChange={handleChange}
          />
          <p>Fecha de finalización </p>
          <input
            className={`${styles.input} `}
            type="date"
            name="fecha2"
            id="fecha2"
            value={form.fecha2}
            onChange={handleChange}
          />
        </div>
        <p>Descripción</p>
        <textarea
          className={`${styles.textarea} `}
          name="descripcion"
          rows="10"
          cols="180"
          value={form.descripcion}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>
          <input
            onClick={() => setvalor(!true)}
            className={`${styles.check} `}
            type="checkbox"
            name="check"
            id="check"
            value={form.valor}
            onChange={handleChange}
            required
          />
          Actualmente trabajo aquí
        </label>
        <input type="submit" className={styles.buttonSubmit} />
      </form>
    </div>
  )
}
