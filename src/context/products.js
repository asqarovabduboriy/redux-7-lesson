import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products?limit=8",
        params,
      }),
      providesTags: ["Product"],
    }),

    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    getsearchproducts: build.query({
      query: (params) => ({
        url: `/products/search`,
        params,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetsearchproductsQuery } = productApi;
