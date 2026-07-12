import { configureStore, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: null,
        loading: false,
        error: null,
        pickup: '',
        dropoff: ''
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSearchParams: (state, action) => {
            state.pickup = action.payload.pickup;
            state.dropoff = action.payload.dropoff;
        }
    }
});

export const { setLoading, setResults, setError, setSearchParams } = searchSlice.actions;

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer
    }
});

export default store;


