import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchSummaries} from "../../api/api";



const token = JSON.stringify(localStorage.getItem('access_token'))

export const getSummaries = createAsyncThunk('summaries', fetchSummaries)

// export async function getSummaries () {
//     const newToken = token.split('"')[1]
//     await axios.get(
//         'http://localhost:80/summaries',
//         {
//             headers: {
//                 'Authorization': "Bearer " + newToken
//             }
//         }
//         )
//         .then(response => {
//             console.log('response', response)
//         })
// }

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