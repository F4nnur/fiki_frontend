import {createAsyncThunk} from "@reduxjs/toolkit";


const token = localStorage.getItem('access_token')
console.log(token)
export const getSummaries = createAsyncThunk('summaries', async (body) => {
    const response = await fetch('http://localhost:80/summaries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + token
        }
    })
    const data = response.json()
    console.log(data)
    return await data
})