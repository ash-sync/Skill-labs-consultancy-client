/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skill-labs-consultancy-server.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {

      const token =
        (getState() as any).auth?.token || localStorage.getItem("auth_token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["service", "destination", "country", "faq", "booking", "testimonial", "user", "expert"],
  endpoints: () => ({}),
});
