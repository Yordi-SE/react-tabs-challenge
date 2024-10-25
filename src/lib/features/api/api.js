import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getTexts: builder.query({
      query: (id) => ({
        url: `api/1/short/plaintext`,
        responseHandler: (response) => response.text(),
      }),
      transformResponse: (response) => {
        // console.log("response", response);
        return response;
      },
    }),
  }),
});

export const { useGetTextsQuery } = apiSlice;
