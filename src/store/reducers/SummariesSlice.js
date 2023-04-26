import {createSlice} from "@reduxjs/toolkit";
import {getSummaries} from "../actions/Summaries";


const InitialState = [{
    summaries: [],
    isLoading: false
}]

const summariesSlice = createSlice({
    name: 'summaries',
    initialState: InitialState,
    reducers: {
        addSummaries: (state, action) => {
        }
    },
    extraReducers: {
        [getSummaries.rejected]: (state, action) => {
            state.isLoading = true
        },
        [getSummaries.pending]: (state, action) => {
            state.isLoading = true
        },
        [getSummaries.fulfilled]: (state, action) => {
            state.isLoading = false
            state.summaries = action.payload
        }
    }
})

export default summariesSlice.reducer
