import useForms from "components/useForms"
import React, { useState } from "react"
import prueba from "assets/prueba.png"
import style from "./style-sig.module.scss"

import * as api from "../../api"

export const SignUp = () => {
  const initialValues = {
    email: "",
    password: "",
    password2: "",
    type_user: "1",
  }

  const [success, setSuccess] = React.useState("")
  const [, setError] = React.useState("")

  const submitForm = async () => {
    try {
      const { status, data } = await api.registerUser({
        email,
        password,
        type_user,
      })

      if (status === 200) setSuccess(true)

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

  //Mostrar el mensaje de exito si el estado success es true
  if (success)
    return <div className="form-wrapper Success">Registro completado</div>

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headers}>
          <h1 className={style.title}>Registro</h1>
          <h2 className={style.subtitle}>¡Manos a la obra!</h2>
        </div>
        <img className={style.imagen} src={prueba} alt="imagen representativa"/>
      </div>
      <form className={style.form}>
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
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            {errors.password && (
              <p className={style.error}>{errors.password}</p>
            )}
          </label>
          <label className={style.label}>
            Confirmar Contraseña
            <input
              className={style.input}
              type="password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
            {errors.password2 && (
              <p className={style.error}>{errors.password2}</p>
            )}
          </label>
        </div>
        <button className={style.submit} onClick={handleFormSubmit}>
          Registrarse
        </button>
        <span className={style.login}>
          ¿Ya tienes cuenta? <a href="../">Inicia Sesión</a>
        </span>
      </form>
    </div>
  )
}
