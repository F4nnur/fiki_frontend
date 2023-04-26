import {createSlice} from "@reduxjs/toolkit";
import userActions from "../actions/User";

const initialState = {
    isLoading: false,
    access_token: '',
    refresh_token: ''
}

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addToken: (state, action) => {
            state.access_token = localStorage.getItem('access_token')
            state.refresh_token = localStorage.getItem('refresh_token')
        },
        logout: (state, action) => {
            state.access_token = null
            state.refresh_token = null
            localStorage.clear()
        },
    },
    extraReducers: {
        [userActions.signUpUser.pending]: (state, action) => {
            state.isLoading = true

        },
        [userActions.signUpUser.rejected]: (state, action) => {
            state.isLoading = true
        },
        [userActions.signUpUser.fulfilled]: (state, action) => {
            state.isLoading = false
        },

        [userActions.logInUser.pending]: (state, action) => {
            state.isLoading = true
        },
        [userActions.logInUser.rejected]: (state, action) => {
            state.isLoading = true
        },
        [userActions.logInUser.fulfilled]: (state, {'payload': {access_token, refresh_token}}) => {
            state.isLoading = false
            state.access_token = access_token
            state.refresh_token = refresh_token
            localStorage.setItem('access_token', JSON.stringify(access_token))
            localStorage.setItem('refresh_token', JSON.stringify(refresh_token))

        }
    }
})

export const {addToken, logout} = UserSlice.actions

export default UserSlice.reducer
