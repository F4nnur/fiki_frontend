import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../api/api";
import {extractErrorMessage} from "../../utils";

// const user = JSON.stringify(localStorage.getItem('user'))

// const register = createAsyncThunk('/users', async (user, thunkAPI) => {
//     try {
//         return await AuthService.register(user)
//     } catch (error) {
//         return thunkAPI.rejectWithValue(extractErrorMessage(error))
//     }
// })

const logIn = createAsyncThunk('login', async (user, thunkAPI) => {
    try {
        return await AuthService.logInAPI(user)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

const userActions = {
    // register,
    logIn
}


export const userRegistration = createAsyncThunk(
    'user',
    async function(userData, {rejectWithValue}){
        try {
            const user = userData;
            console.log(user)
            const response = await fetch('http://localhost/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });
            if (!response.ok){
                throw new Error('Server error');
            }

            const data = await response.json()
            console.log(data)
        }catch (error){
            return rejectWithValue(error)
        }
    }
)
export default userActions;