import {createSlice,configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {api} from "state/api";

const initialState={
    mode:"dark",
    user:null,
};

const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode: (state) =>{
            state.mode = (state.mode==="dark") ? "light" :"dark";
        },
        setUser : (state,data)=>{
            console.log(data);
            state.user=data.payload.data;
            console.log(state.user);
        }
    },
});

const globalReducer = globalSlice.reducer;

const store = configureStore({
    reducer:{
        global:globalReducer,
        [api.reducerPath]:api.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);

const {setMode,setUser} = globalSlice.actions;
export {globalSlice,globalReducer,setMode,setUser};
export default store;
