import {createSlice} from '@reduxjs/toolkit';

export const storiesSlice = createSlice({
    name: 'stories',
    initialState: {},
    reducers: {
        fetchingStories:(state) => {
            return {
                ...state.stories, 
                isLoading: true,
                isError: false,
            }
        },
        gotStories: (state, action) => {
        return {
            ...state.stories, 
            isLoading: false, 
            isError: false, 
            data: action.payload
            }
        },  
        fetchStoriesFailed: (state, action) => {
            return {
                ...state,
                isLoading: false,
                isError: true,        
        } 
        },
}})


export const selectStories = state => state.stories;
export const {fetchingStories, gotStories, fetchStoriesFailed} = storiesSlice.actions;
export default storiesSlice.reducer;