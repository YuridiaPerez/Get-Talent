import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import img1 from "assets/img1.png"
import styles from "./style-home.module.scss"
import * as api from "../../api"
import Swal from "sweetalert2"

const errorInitialState = {
  msg1:'',
  msg2:'',
  msg3:'',
}


export const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const [loginSuccess, setLoginSuccess] = useState("")
  const [loginError, setLoginError] = useState("")


  
  const submitForm = async () => {
    /* Trying to login the user. */
    try {
      const { status, data } = await api.loginUser({
        email,
        password,
      })

      if (status === 200) setLoginSuccess(true)
      
      console.log(data)
    } /* Catching the error and setting the error state to false. Then it is creating a variable called
    errorMsg and setting it to the errorInitialState. Then it is looping through the
    error.response.data and setting the errorMsg to the errorMsg plus the property and the
    error.response.data[property]. Then it is setting the errorMsg to the error state. */
    catch (error) {

      setLoginError(false)

      let errorMsg = errorInitialState
      for(let property in error.response.data){
      //console.log(property)
      errorMsg = {
        ...errorMsg,
        [property]: error.response.data[property]
    }
  }
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMsg.msg3,
    });
  setLoginError(errorMsg)
  }
  }
  /**
   * The handleChange function takes an event as an argument, and then sets the data state to the
   * current data state, plus the event target name and value
   * @param event - the event that triggered the function
   */
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

  useEffect(() => {
    if (loginSuccess) navigate("/profile")
  }, [loginSuccess, navigate])

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>¡Bienvenido!</h1>
        <h3 className={styles.subtitle}>Por favor, inicia sesión.</h3>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label>
            Correo:
            {/* A form input that is using the `useForm` hook to validate the input. */}
            <input
              className={styles.input}
              placeholder="Ingrese su correo electrónico"
              type="email"
              name="email"
              required
              value={data.email}
              onChange={handleChange}

            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              className={`${styles.input} ${styles.password}`}
              placeholder="Ingrese su contraseña"
              type="password"
              name="password"
              required
              /* Setting the value of the input to the value of the password property of the data
              state. */
              value={data.password}
              onChange={handleChange}
            />
            {loginError && (
              <p className={styles.error}>
                {/* Converting the loginError object into a string, so that it can be displayed in the
                browser. */}
                {loginError.msg1} || {loginError.msg2}
              </p>
            )}
          </label>
          <input className={styles.btnSubmit} type="submit" value="Ingresar" />
        </form>
        <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
        <span>¿No tienes una cuenta?</span>
        <Link to="/sign-up">Regístrate aquí.</Link>
        <span>¿Cuentas con un video de presentación?</span>
        <Link to="/video">Agrégalo Aqui.</Link>
      </div>
      <img className={styles.img1} src={img1} alt="imagen representativa" />
    </div>
  )
}
