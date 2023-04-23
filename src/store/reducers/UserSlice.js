import {createSlice} from "@reduxjs/toolkit";
import userActions from '../actions/User'

const initialState = {
    user: null,
    isLoading: false
}
const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userActions.register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(userActions.register.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            .addCase(userActions.register.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(userActions.logIn.pending, (state) =>{
                state.isLoading = false
            })
            .addCase(userActions.logIn.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(userActions.logIn.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
    }
})

// export const {register, LogIN} = UserSlice.actions
export default UserSlice.reducer
