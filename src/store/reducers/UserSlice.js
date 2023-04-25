import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    password: '',
    isLoading: false
}


export const signUpUser = createAsyncThunk('signup', async(body) => {
    const response = await fetch('http://localhost:80/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    return await response.json()
})

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [signUpUser.pending]: (state, action) => {
            state.isLoading = true

        },
        [signUpUser.rejected]: (state, action) => {
            state.isLoading = true
        },
        [signUpUser.fulfilled]: (state, action) => {
            state.isLoading = false

        }
    }
})

export const {register} = UserSlice.actions

export default UserSlice.reducer
