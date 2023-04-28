import {createSlice} from "@reduxjs/toolkit";
import {addSummaries, getSummaries} from "../actions/Summaries";


const InitialState = {
    summaries: [],
    isLoading: false
}

const summariesSlice = createSlice({
    name: 'summaries',
    initialState: InitialState,
    reducers: {},
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
        },
        [addSummaries.fulfilled]: (state, action) => {
            state.isLoading = false
            state.summaries = action.payload
        },
        [addSummaries.rejected]: (state, action) => {
            state.isLoading = true
        },
        [addSummaries.pending]: (state, action) => {
            state.isLoading = true
        }
    }
})

export default summariesSlice.reducer
