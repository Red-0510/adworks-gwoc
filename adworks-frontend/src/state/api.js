import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9001"}),
    reducerPath:"api",
    tagTypes:["USER","EMAIL","EMAIL"],
    endpoints :(build)=>({
        login :build.mutation({
            query: (body)=>{
                // console.log(body,"hello");
                if(body.signup===true){
                    return {
                        url:"/user/signup",
                        method:"post",
                        body,
                    }
                }
                else{
                    return {
                        url:"/user/login",
                        method:"post",
                        body,
                    }
                }
            },
            invalidatesTags:[{type:"USER"}]
        }),
        signUp :build.mutation({
            query: (body)=>{
                // console.log(body,"hello");
                return {
                    url:"/user/signup",
                    method:"post",
                    body,
                }
            },
            invalidatesTags:[{type:"USER"}]
        }),
        sendEmail :build.mutation({
            query: (body)=>{
                // console.log(body,"hello");
                return {
                    url:"/contact/email",
                    method:"post",
                    body,
                }
            },
            invalidatesTags:[{type:"EMAIL"}]
        }),
        sendEmail : build.mutation({
            query:(body)=>{
                return { 
                    url:"/contact/email",
                    method:"post",
                    body,
                }
            },
            invalidatesTags:[{type:"EMAIL"}],
        }),
    })
});

const {useLoginMutation} = api;
export {api,useLoginMutation};