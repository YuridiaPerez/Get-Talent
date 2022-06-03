import axios from 'axios'

const host = process.env.REACT_APP_API_HOST;

export async function registerUser(data) {
    return await axios.post(`${host}/auth/signup/`, data)
}

export async function loginUser(data) {
    return await axios.post(`${host}/auth/login/`, data)
}

export async function userVerification(data) {
    return await axios.post(`${host}/auth/verify-email/?token=`, data)
}