/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "./axios.config"
import { loginType, registerType } from "../types"
import { redirect } from "next/navigation"


const login = async (loginData: loginType) => {
    console.log({ loginData })
    const data = await await axios.post('/auth/login', loginData)
    const {authToken} = data.data
    bording(authToken)
}

const register = async (registerData: registerType) => {
    const data = await axios.post('/auth/register', registerData)
    const {authToken} = data.data
    bording(authToken)
}


// Oauth 2.O

const googleAuth = () => {
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`)
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`
}
const facebookAuth = () => window.location.href = `${process.env.BACKEND_URL}/auth/facebook`


const _changePassword = async () => { }
const _forgetPassword = async () => { }

const bording = (token: string): void => {
    localStorage.setItem("bazzar_token", token)
    redirect('/home')
}

export { login, register, googleAuth, facebookAuth }