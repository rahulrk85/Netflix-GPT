import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    trailerVideo2: null,
    upcomingMovies: null,
    topratedMovies: null,
    movieDetailedPage: null,
    searchedMovies: null,
    moviePageTrailer: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieTrailer2: (state, action) => {
      state.trailerVideo2 = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addMovieDetailedPage: (state, action) => {
      state.movieDetailedPage = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    addmoviePageTrailer: (state) => {
      state.moviePageTrailer = !state.moviePageTrailer;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addMovieDetailedPage,
  addSearchedMovies,
  addmoviePageTrailer,
  addMovieTrailer2,
} = moviesSlice.actions;

export default moviesSlice.reducer;
