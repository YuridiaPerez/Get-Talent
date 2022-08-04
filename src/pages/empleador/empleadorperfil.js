import React, { useState } from "react"
import styles from "./style-empleadorperfil.module.scss"
import NavbarE from "components/Navbar/indexE"
import img16 from "assets/img16.png"

export const Empleadorperfil = () => {
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
    <div className={styles.container}>
      <NavbarE />
      <div className={styles.containerTitle}>Completa tu perfil</div>
      <br />
      <form onSubmit={handleSubmit}>
        <p>Nombre de la empresa</p>
        <input
          className={`${styles.input} `}
          required
          type="text"
          id="nombreEmpresa"
          name="nombreEmpresa"
          value={form.nombreEmpresa}
          onChange={handleChange}
        />
        <br />
        <p>Descripción de la empresa</p>
        <textarea
          className={`${styles.textarea} `}
          name="descripcion"
          rows="5"
          cols="150"
          value={form.descripcion}
          onChange={handleChange}
        ></textarea>
        <br />
        <p>Sube tu logotipo aquí</p> <br />       
        <input
          type="file"
          className={`${styles.selectedFile} `}
          name="selectedFile"
          value={form.selectedFile}
          onChange={handleChange}
          id="inputFile"
        />
        <br />
        <input type="submit" className={styles.buttonSubmit} />
      </form>
      <img className={styles.img16} src={img16} alt="imagen representativa" />
    </div>
  )
}
