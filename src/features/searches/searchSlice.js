import {createSlice} from '@reduxjs/toolkit';


const initialState = {searchTerm: window.localStorage.getItem('history')} || {searchTerm: "r/MostBeautiful/top/.json?count=25"}

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