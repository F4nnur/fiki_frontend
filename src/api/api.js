import axios from "axios";


const token = localStorage.getItem('access_token')
const BASE_URL = 'http://localhost:80/'

console.log(token)

const appInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
    }
});


export const fetchSummaries = async () => {
    let data = await appInstance.get('summaries')
    console.log(data)
    return data.data
}


