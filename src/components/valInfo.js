const valInfo = (values) => {
  const errors = {}

  if (!values.email) errors.email = "Correo requerido."
  else if (!/\S+@\S+\.\S+/.test(values.email))
    errors.email = "El correo es invalido."

  // Si la contraseña esta vacia
  if (!values.password) errors.password = "Contraseña requerida."
  // Si es corta
  else if (
    values.password.length < 6 &&
    /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{6,}$/.test(values.password)
  )
    errors.password = "La contraseña debe tener al menos 6 o más caracteres."

  // Si la contraseña esta vacia
  if (!values.password2) errors.password2 = "Contraseña requerida."
  else if (
    values.password2.length !== values.password.length ||
    values.password !== values.password2
  )
    errors.password2 = "No coinciden las contraseñas."

  // si el rol esta vacio
  if (!values.type_user) errors.type_user = "Rol requerido."
  else if (values.type_user === 0) errors.type_user = "Seleccione un rol."

  return { errors, hasErrors: Object.keys(errors).length }
}

export default valInfo
