import { apiSlice } from './apiSlice.js';
import { USERS_URL } from '@/constants.js';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({ keyword, page }) => ({
                url: USERS_URL,
                params: { keyword, page }
            }),
            providesTags: ['User'],
            keepUnusedDataFor: 5,
        }),
        getProfile: builder.query({
            query: () => ({
                url: `${USERS_URL}/profile`,
            })
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `${USERS_URL}/${userId}`,
                method: 'DELETE'
            }),
            providesTags: ['User'],
        }),
    })
});

export const {
    useGetUsersQuery,
    useUpdateProfileMutation,
    useGetProfileQuery,
    useDeleteUserMutation
} = usersApiSlice;