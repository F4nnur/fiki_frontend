import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchSummaries} from "../../api/api";



const token = JSON.stringify(localStorage.getItem('access_token'))

export const getSummaries = createAsyncThunk('summaries', fetchSummaries)

export const addSummaries = createAsyncThunk('add-summaries', async (body) => {
    const response = await fetch('http://localhost:80/summaries', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Authorization': "Bearer" + token
        },
        body: JSON.stringify(body)
    })
    return await response.json()
})