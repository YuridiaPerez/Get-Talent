const host = "https://sisile.herokuapp.com"

export async function loginUser() {
  return await axios.post(`${host}/auth/login/`, {
    email,
    password,
  })
}