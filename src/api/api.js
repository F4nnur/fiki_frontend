import axios from "axios";


const BASE_URL = 'http://localhost:8000/'

// const appInstance = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true,
// })

const register = async (userData) => {
    const response = await axios.post(BASE_URL + 'users', userData)
    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logInAPI = async (username, password) => {
    const response = await axios.post(BASE_URL + '/auth/login/', {username, password})
    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const AuthService = {
    register,
    logInAPI,
};

export default AuthService;