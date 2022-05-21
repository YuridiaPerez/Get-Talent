import React, { useState } from "react"
import { Link } from "react-router-dom"
import img1 from "assets/img1.png"
import styles from "./style-home.module.scss"
import * as api from "../../api"
import s200 from "assets/s200.png"

export const Home = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const submitForm = async () => {
    try {
      const { status, data } = await api.loginUser({
        email,
        password
      })

      if (status === 200) setSuccess(true)

      console.log(data)
    } catch (err) {
      setError(`Error(${err.status}): ${err.message}`)
    }
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    submitForm()
  }

  const { email, password } = data

  if(success)
  return <div className="form-wrapper Success">Login completado <br />
    <img src={s200} alt="s200" />
  </div>

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>¡Bienvenido!</h1>
        <h3 className={styles.subtitle}>Por favor, inicia sesión.</h3>
        <div className="banner-error">Correo electrónico y/o contraseña erroneos</div>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label>
            Correo:
            {/* A form input that is using the `useForm` hook to validate the input. */}
            <input
              className={styles.input}
              placeholder="Ingrese su correo electrónico"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          {error.email && <p className={styles.error}>{error.email.message}</p>}
          </label>
          <br />
          <label>
            Contraseña:
            <input
              className={`${styles.input} ${styles.password}`}
              placeholder="Ingrese su contraseña"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <input className={styles.btnSubmit} type="submit" value="Ingresar" />
        </form>
        <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
    
        <span>¿No tienes una cuenta? </span>
        <Link to="/sign-up">Regístrate aquí.</Link>
        <span>¿Cuentas con un video de presentación? </span>
        <Link to="/video">Agrégalo Aqui.</Link>
      </div>
      <img className={styles.img1} src={img1} alt="imagen representativa" />{" "}
    </div>
  )
}
