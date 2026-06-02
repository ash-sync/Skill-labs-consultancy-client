import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getServices: builder.query({
      query: () => "/service",
      providesTags: ["service"],
      transformResponse: (response: any) => response.data || response,
    }),
    createService: builder.mutation({
      query: (formData) => ({
        url: "/service",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),
    updateService: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/service/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),


    getDestinations: builder.query({
      query: () => "/destination",
      providesTags: ["destination"],
      transformResponse: (response: any) => response.data || response,
    }),
    createDestination: builder.mutation({
      query: (formData) => ({
        url: "/destination",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["destination"],
    }),
    updateDestination: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/destination/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["destination"],
    }),
    deleteDestination: builder.mutation({
      query: (id) => ({
        url: `/destination/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["destination"],
    }),


    getCountries: builder.query({
      query: () => "/country",
      providesTags: ["country"],
      transformResponse: (response: any) => response.data || response,
    }),
    createCountry: builder.mutation({
      query: (formData) => ({
        url: "/country",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["country"],
    }),
    updateCountry: builder.mutation({
      query: ({ id, data }) => ({
        url: `/country/${id}`,
        method: "PATCH",
        body: { body: data },
      }),
      invalidatesTags: ["country"],
    }),
    deleteCountry: builder.mutation({
      query: (id) => ({
        url: `/country/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["country"],
    }),


    getFaqs: builder.query({
      query: () => "/faq",
      providesTags: ["faq"],
      transformResponse: (response: any) => response.data || response,
    }),
    createFaq: builder.mutation({
      query: (faqData) => ({
        url: "/faq",
        method: "POST",
        body: faqData,
      }),
      invalidatesTags: ["faq"],
    }),
    updateFaq: builder.mutation({
      query: ({ id, faqData }) => ({
        url: `/faq/${id}`,
        method: "PATCH",
        body: faqData,
      }),
      invalidatesTags: ["faq"],
    }),
    deleteFaq: builder.mutation({
      query: (id) => ({
        url: `/faq/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["faq"],
    }),


    getBookings: builder.query({
      query: () => "/booking",
      providesTags: ["booking"],
      transformResponse: (response: any) => response.data || response,
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/booking",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),
    updateBookingStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/booking/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["booking"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),


    getTestimonials: builder.query({
      query: () => "/testimonial",
      providesTags: ["testimonial"],
      transformResponse: (response: any) => response.data || response,
    }),
    createTestimonial: builder.mutation({
      query: (testimonialData) => ({
        url: "/testimonial",
        method: "POST",
        body: testimonialData,
      }),
      invalidatesTags: ["testimonial"],
    }),
    updateTestimonialStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/testimonial/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["testimonial"],
    }),
    deleteTestimonial: builder.mutation({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonial"],
    }),


    getExperts: builder.query({
      query: (params) => ({
        url: "/expert",
        params,
      }),
      providesTags: ["expert"],
      transformResponse: (response: any) => response.data || response,
    }),
    createExpert: builder.mutation({
      query: (expertData) => ({
        url: "/expert",
        method: "POST",
        body: expertData,
      }),
      invalidatesTags: ["expert"],
    }),
    updateExpert: builder.mutation({
      query: ({ id, expertData }) => ({
        url: `/expert/${id}`,
        method: "PATCH",
        body: expertData,
      }),
      invalidatesTags: ["expert"],
    }),
    deleteExpert: builder.mutation({
      query: (id) => ({
        url: `/expert/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["expert"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useGetDestinationsQuery,
  useCreateDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
  useGetCountriesQuery,
  useCreateCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
  useGetFaqsQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
  useGetBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingStatusMutation,
  useDeleteBookingMutation,
  useGetTestimonialsQuery,
  useCreateTestimonialMutation,
  useUpdateTestimonialStatusMutation,
  useDeleteTestimonialMutation,
  useGetExpertsQuery,
  useCreateExpertMutation,
  useUpdateExpertMutation,
  useDeleteExpertMutation,
} = dashboardApi;
