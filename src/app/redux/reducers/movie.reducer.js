const defaultMovies = [
  {
    name: 'Donnie Darko',
    liked: false
  },
  {
    name: 'Inception',
    liked: false
  },
  {
    name: 'Interstellar',
    liked: false
  },
  {
    name: 'Hangover',
    liked: false
  },
];

const moviesReducer = (state = { movies: defaultMovies, favMovies: [] }, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      console.log('in fetch movies', action);
      return state

    case 'TOGGLE_LIKE_ON_MOVIE':
      let movies = state.movies.concat();
      movies[action.index].liked = !movies[action.index].liked;
      return Object.assign({}, state, {
        movies:  movies
      })

    case 'FETCH_Favorite_MOVIES':
      return Object.assign({}, state, {
        favMovies:  state.movies.filter(movie => movie.liked)
      })

    default:
      return state
  }
}

export default moviesReducer;