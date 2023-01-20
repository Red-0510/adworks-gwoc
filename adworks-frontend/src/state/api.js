import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_SERVER_URL}),
    reducerPath:"api",
    tagTypes:["USER","EMAIL","EMAIL"],
    endpoints :(build)=>({
        login :build.mutation({
            query: (body)=>{
                return {
                    url:"/user/login",
                    method:"post",
                    body,
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
        getProduct : build.query({
            query: (id) => `/user/products/${id}`,
            providesTags:["USER"],
        }),
    })
});

const {useLoginMutation,useSignUpMutation,useGetProductQuery} = api;
export {api,useLoginMutation,useSignUpMutation,useGetProductQuery};