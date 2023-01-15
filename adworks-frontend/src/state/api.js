import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_SERVER_URL}),
    reducerPath:"api",
    tagTypes:["USER"],
    endpoints :(build)=>({
        login :build.mutation({
            query: (body)=>{
                // console.log(body,"hello");
                return {
                    url:"/user/login",
                    method:"post",
                    body,
                }
            },
            invalidatesTags:[{type:"USER"}]
        }),
    })
});

const {useLoginMutation} = api;
export {api,useLoginMutation};