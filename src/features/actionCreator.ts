import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../components/network/baseUrl";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async ()=>{
        return fetch(BaseUrl + '/users').then((res)=>
            res.json()
        )
    })

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
//
// const getUsers = createAsyncThunk(
//     'users/getUsers',
//     async (userId, { signal }) => {
//         const source = axios.CancelToken.source()
//         signal.addEventListener('abort', () => {
//             source.cancel()
//         })
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/users${userId}`, {
//             cancelToken: source.token,
//         })
//         return response.data
//     }
// )

//    this will for us to loop twice at some point

//export const getUsers = createAsyncThunk('users/getUsers', async () => {
//     const response = await axios.get(BaseUrl+'/users')
//     // console.log('response',response.data)
//     return response.data
// })
