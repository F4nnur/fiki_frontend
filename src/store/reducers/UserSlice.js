import {createSlice} from "@reduxjs/toolkit";
import userActions from "../actions/User";

const initialState = {
    isLoading: false,
    isAuth: false,
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
            state.isAuth = true
        },
        logout: (state, action) => {
            state.access_token = null
            state.refresh_token = null
            localStorage.clear()
        },
    },
    extraReducers: {
        [userActions.signUpUser.pending]: (state) => {
            state.isLoading = true
        },
        [userActions.signUpUser.rejected]: (state) => {
            state.isLoading = true
        },
        [userActions.signUpUser.fulfilled]: (state) => {
            state.isLoading = false
        },

        [userActions.logInUser.pending]: (state) => {
            state.isLoading = true
            state.isAuth = false
        },
        [userActions.logInUser.rejected]: (state) => {
            state.isLoading = true
            state.isAuth = false
        },
        [userActions.logInUser.fulfilled]: (state, {'payload': {access_token, refresh_token}}) => {
            state.isLoading = false
            state.isAuth = true
            state.access_token = access_token
            state.refresh_token = refresh_token
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', refresh_token)

        },
        [userActions.logOutUser.rejected]: (state) => {
            state.isLoading = true
        },
        [userActions.logOutUser.pending]: (state) => {
            state.isLoading = true
        },
        [userActions.logOutUser.rejected]: (state) => {
            state.isLoading = false
            state.isAuth = false
        }
    }
})

export const {addToken, logout} = UserSlice.actions

export default UserSlice.reducer
