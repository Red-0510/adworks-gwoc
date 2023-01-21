import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_SERVER_URL}),
    reducerPath:"api",
    tagTypes:["USER","PRODUCT"],
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

        addProduct: build.mutation({
            query: (body)=>({
                url:"user/add-product",
                method:"post",
                body,
            }),
            invalidatesTags:[{type:"PRODUCT"}]
        }),

        getProduct : build.query({
            query: (id) => `/user/products/${id}`,
            providesTags:["PRODUCT"],
        }),
    })
});

const {useLoginMutation,useSignUpMutation,useGetProductQuery,useAddProductMutation} = api;
export {api,useLoginMutation,useSignUpMutation,useGetProductQuery,useAddProductMutation};