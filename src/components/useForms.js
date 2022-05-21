 import { useState, useEffect } from "react";
import valInfo from "./valInfo";

const useForms = (submitForm, initialValue) => {
  // Valores iniciales del form
  const [values, setValues] = useState(initialValue);
  // Errores
  const [errors, setErrors] = useState({});
  // Si la info es correcta
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  // Cambia el estado de los valores
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  // Evento onSubmit del form
  const handleFormSubmit = (event) => {
    // Previenes que la pagina recarge
    event.preventDefault();
    // Validas
    setErrors(valInfo(values));
    // Guardas
    setDataIsCorrect(true);
  };

  useEffect(() => {
    // Si no hay errores y si la data es correcta
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors,submitForm, dataIsCorrect]);// <- Cada vez que errores cambia
  //   Regresas funciones
  return { handleChange, handleFormSubmit, values, errors };
};

export default useForms;
