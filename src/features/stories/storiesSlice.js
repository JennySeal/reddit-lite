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
        removeStory: (state, action) => {
            return {
                ...state.stories, 
                data: state.stories.data.filter(
                    story => action.payload.objectID !== story.objectID
                )
            }
        }
    }
})


export const selectStories = state => state.stories.data;
export const {fetchingStories, gotStories, fetchStoriesFailed, removeStory} = storiesSlice.actions;
export default storiesSlice.reducer;