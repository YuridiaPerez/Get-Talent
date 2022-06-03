import useForms from "components/useForms"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import prueba from "assets/prueba.png"
import * as api from "api"
import style from "./style-sig.module.scss"
import Swal from "sweetalert2"

const passwordValidator = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{6,}$/;

export const SignUp = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
    password2: "",
    type_user: "1",
  }

  const [success, setSuccess] = React.useState("")
  const [error, setError] = React.useState("")

  const submitForm = async () => {
    try {
      const { status, data } = await api.registerUser({
        email,
        password,
        type_user,
      })

      if (status === 200) setSuccess(true)
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Revisa tu correo para activar tu cuenta",
      })

      console.log(data)
    } catch (err) {
      setError(`Error(${err.status}): ${err.message}`)
    }
  }

  const { handleChange, handleFormSubmit, values, errors } = useForms(
    submitForm,
    initialValues
  )

  const { email, password, password2, type_user } = values

  const [framework, setFramework] = useState(0)

  const cambiaRadioFramework = (e) => {
    setFramework(e.currentTarget.value)
  }

  useEffect(() => {
    if (success) navigate("/")
  }, [success, navigate])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headers}>
          <h1 className={style.title}>Registro</h1>
          <h2 className={style.subtitle}>¡Manos a la obra!</h2>
        </div>
        <img
          className={style.imagen}
          src={prueba}
          alt="imagen representativa"
        />
      </div>
      {error && <div>{error}</div>}
      <form className={style.form} onSubmit={handleFormSubmit}>
        <div className={style.formRow}>
          <label className={style.label}>
            Correo Electronico
            <input
              className={style.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p className={style.error}>{errors.email}</p>}
          </label>
          <label className={style.label}>
            Roles
            <select
              placeholder="Seleccione un rol"
              className={style.input}
              name="roles"
              value={framework}
              onChange={cambiaRadioFramework}
              required
            >
              <option value="1">Empleador</option>
              <option value="2">Solicitante</option>
            </select>
          </label>
        </div>
        <div className={style.formRow}>
          <label className={style.label}>
            Contraseña
            <input
              className={style.input}
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
              required
              pattern={passwordValidator.source}
            />
            {errors.password && (
              <p className={style.error}>{errors.password}</p>
            )}
          </label>
          <label className={style.label}>
            Confirmar Contraseña
            <input
              className={style.input}
              type="text"
              name="password2"
              value={password2}
              onChange={handleChange}
              required
            />
            {errors.password2 && (
              <p className={style.error}>{errors.password2}</p>
            )}
          </label>
        </div>
        <button type="submit" className={style.submit}>
          Registrarse
        </button>
        <span className={style.login}>
          ¿Ya tienes cuenta? <a href="../">Inicia Sesión</a>
        </span>
      </form>
    </div>
  )
}
