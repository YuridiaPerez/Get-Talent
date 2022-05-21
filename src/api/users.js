import axios from 'axios'

const host = "https://sisile.herokuapp.com"

export async function registerUser(data) {
    return await axios.post(`${host}/auth/signup/`, data)
}

export async function loginUser(data) {
    return await axios.post(`${host}/auth/login/`, data)
}