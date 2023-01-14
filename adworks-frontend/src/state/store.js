import {createSlice,configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {api} from "state/api";

const initialState={
    mode:"dark",
    user:null
};

const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode: (state) =>{
            state.mode = (state.mode==="dark") ? "light" :"dark";
        },
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

const {setMode} = globalSlice.actions;
export {globalSlice,globalReducer,setMode};
export default store;
