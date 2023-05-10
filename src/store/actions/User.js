import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCurrentUser} from "../../api/api";

const token = localStorage.getItem('access_token')
const signUpUser = createAsyncThunk('signup', async(body) => {
    const response = await fetch('http://localhost:80/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    return await response.json()
})

const logInUser = createAsyncThunk('logIn', async(body) => {
    const response = await fetch('http://localhost:80/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    return await response.json()
})

const logOutUser = createAsyncThunk('logout', async () => {
    const response = await fetch('http://localhost:80/auth/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    })
    return await response.json()
})

const getUser = createAsyncThunk('currentUser', getCurrentUser)

const userActions = {
    signUpUser,
    logInUser,
    getUser,
    logOutUser
}
export default userActions;