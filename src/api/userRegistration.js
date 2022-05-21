const host = "https://sisile.herokuapp.com/"

export async function registerUser() {
  return await axios.post(`${host}/auth/signup/`, {
    email,
    password,
    type_user,
  })
}
