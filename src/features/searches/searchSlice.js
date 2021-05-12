import {createSlice} from '@reduxjs/toolkit';


const initialState = {searchTerm: "search art"}

export const searchSlice = createSlice({
    name: 'searches',
    initialState,
    reducers: {
        updateSearch:(state, action) => {
            return {
                ...state.searches,
                searchTerm: action.payload
            } 
                
        }
    }
})


export const selectSearches = state => state.searches.searchTerm;
export const {updateSearch} = searchSlice.actions;
export default searchSlice.reducer;