import { CHARACTERS_URL, UPLOAD_URL } from '@/constants.js';
import { apiSlice } from './apiSlice';

export const charactersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: ({ keyword, page, sort }) => ({
                url: CHARACTERS_URL,
                params: { keyword, page, sort }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Characters'],
        }),
        getCharacterById: builder.query({
            query: (characterId) => ({
                url: `${CHARACTERS_URL}/${characterId}`
            }),
            keepUnusedDataFor: 5
        }),
        createCharacter: builder.mutation({
            query: (data) => ({
                url: `${CHARACTERS_URL}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Character'],
        }),
        updateCharacter: builder.mutation({
            query: (data) => ({
                url: `${CHARACTERS_URL}/${data.characterId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Characters'],
        }),
        deleteCharacter: builder.mutation({
            query: (characterId) => ({
                url: `${CHARACTERS_URL}/${characterId}`,
                method: 'DELETE'
            }),
            providesTags: ['Character'],
        }),
        uploadCharacterImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOAD_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
    })
});

export const {
    useGetCharactersQuery,
    useGetCharacterByIdQuery,
    useCreateCharacterMutation,
    useUpdateCharacterMutation,
    useDeleteCharacterMutation,
    useUploadCharacterImageMutation,
} = charactersApiSlice;