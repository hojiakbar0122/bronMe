import { configureStore } from "@reduxjs/toolkit";
import  signInSlice  from "../shared/lib/featers/signIn.Slice";
import  authSlice  from "../shared/lib/featers/auth.Slice";

export const store = configureStore({
    reducer:{
        // fake:()=>"nabi",
        signInSlice,
        authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 