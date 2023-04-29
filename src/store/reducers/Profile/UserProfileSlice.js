import {createSlice} from "@reduxjs/toolkit";
import userActions from "../../actions/User";

const InitialState = {
    userData: [],
    isLoading: false
}

const userProfileSlice = createSlice({
    name: 'user profile',
    initialState: InitialState,
    reducers: {},
    extraReducers: {
        [userActions.getUser.pending]: (state) => {
            state.isLoading = true
        },
        [userActions.getUser.rejected]: (state) => {
            state.isLoading = true
        },
        [userActions.getUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.userData.push(action.payload)
        }
    }
})


export default userProfileSlice.reducer