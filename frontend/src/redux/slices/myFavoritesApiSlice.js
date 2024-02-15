import { MY_FAVORITE_URL } from '@/constants.js';
import { apiSlice } from './apiSlice';

export const myFavoritesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMyFavoriteCharacters: builder.query({
            query: () => ({
                url: `${MY_FAVORITE_URL}/my-favorite-characters`
            }),
            keepUnusedDataFor: 5,
            providesTags: ['MyFavoriteCharacter'],
        }),
        addCharacterToFavorite: builder.mutation({
            query: (characterId) => ({
                url: `${MY_FAVORITE_URL}/add-to-favorites/${characterId}`,
                method: 'POST'
            }),
            invalidatesTags: ['MyFavoriteCharacter']
        }),
        removeCharacterFromFavorite: builder.mutation({
            query: (characterId) => ({
                url: `${MY_FAVORITE_URL}/remove-from-favorites/${characterId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['MyFavoriteCharacter']
        }),
    })
});

export const {
    useGetMyFavoriteCharactersQuery,
    useAddCharacterToFavoriteMutation,
    useRemoveCharacterFromFavoriteMutation,
} = myFavoritesApiSlice;