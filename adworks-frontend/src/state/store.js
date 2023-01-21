import {createSlice,configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {api} from "state/api";

const initialState={
    mode:"dark",
    user:null,
    // user:{
    //     username:"jainesh",
    //     email:"hello@mail.com",
    //     _id:"63ca584f84c33d63f9f60aeb",
    //     profile:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
    // },
};

const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode: (state) =>{
            state.mode = (state.mode==="dark") ? "light" :"dark";
        },
        setUser : (state,data)=>{
            console.log(data,"hello inside");
            if(data.payload) state.user=data.payload.data;
            else state.user=null;
            console.log(state.user,"updated");
        },
        setDevice : (state)=>{
            state.isMobile =(!state.isMobile)
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

const {setMode,setUser,setDevice} = globalSlice.actions;
export {globalSlice,globalReducer,setMode,setUser,setDevice};
export default store;
