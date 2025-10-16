import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IState{
    token:string | null
    user: unknown
}

const initialState:IState = {
    token: localStorage.getItem("token") || null,
    user:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken:(state, action:PayloadAction<string>)=>{
            state.token = action.payload
            localStorage.setItem("token", state.token)
        },
        removeToken:(state)=>{
            state.token = null
            localStorage.removeItem("token")
        }
    }
})

export const {setToken, removeToken} = authSlice.actions
export default authSlice.reducer