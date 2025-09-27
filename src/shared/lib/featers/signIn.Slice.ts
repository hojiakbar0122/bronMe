import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IState{
    email:string
    passowrd:string
}

const initialState:IState = {
    email:"",
    passowrd:""
}

export const signInSlice = createSlice({
    name:"sign-in",
    initialState,
    reducers:{
        setSignInData:(state, action:PayloadAction<IState>)=>{
            state.email = action.payload.email
            state.passowrd = action.payload.passowrd
        },
        clearSignInData:(state)=>{
            state.email = ""
            state.passowrd = ""
        }
    }
})

export const {setSignInData, clearSignInData} = signInSlice.actions
export default signInSlice.reducer