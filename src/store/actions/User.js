import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../api/api";
import {extractErrorMessage} from "../../utils";

// const user = JSON.stringify(localStorage.getItem('user'))

const register = createAsyncThunk('/users', async (user, thunkAPI) => {
    try {
        return await AuthService.register(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

const logIn = createAsyncThunk('login', async (user, thunkAPI) => {
    try {
        return await AuthService.logInAPI(user)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

const userActions = {
    register,
    logIn
}
export default userActions;