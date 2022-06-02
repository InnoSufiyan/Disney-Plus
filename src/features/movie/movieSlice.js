import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: [],
    slider: [],
    filter: ""
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovies: (state, action)=> {
            state.movies = action.payload
        },
        setMovie: (state, action)=> {
            state.movie = action.payload
        },
        setSlider: (state, action)=> {
            state.slider = action.payload
        },
        setFilter: (state, action)=> {
            state.filter = action.payload
        }
    }
})

export const {setMovies, setMovie, setSlider, setFilter} = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export const selectMovie = (state) => state.movie.movie;

export const selectSlider = (state) => state.movie.slider;

export const selectFilter = (state) => state.movie.filter;

export default movieSlice.reducer