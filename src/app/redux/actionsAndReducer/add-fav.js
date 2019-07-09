const fetchMoviesAction = () =>({
  type: 'FETCH_MOVIES',
  movies: [
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
  ]
})

const likeMovieAction = (index) => ({
  type: 'TOGGLE_LIKE_ON_MOVIE',
  index: index
})

const favMovieAction = () => ({
  type: 'FETCH_FAVOURITE_MOVIES'
})


const favMovieReducer = (state = {favMovies : [], movies: []}, action) => {
  switch (action.type) {

     case 'FETCH_FAVOURITE_MOVIES':
      return Object.assign({}, state, {
        favMovies:  state.movies.filter(movie => movie.liked)
      })

    case 'FETCH_MOVIES':
      console.log('in fetch movies', action);
      return Object.assign({}, state, {
        movies:  action.movies
      })

    case 'TOGGLE_LIKE_ON_MOVIE':
      let movies = state.movies.concat();
      movies[action.index].liked = !movies[action.index].liked;
      return Object.assign({}, state, {
        movies:  movies
      })

    default:
      return state
  }
}

export {
  favMovieAction,
  fetchMoviesAction,
  likeMovieAction,

  favMovieReducer
}