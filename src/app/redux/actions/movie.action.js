const fetchMoviesAction = () =>({
  type: 'FETCH_MOVIES',
})

const likeMovieAction = (index) => ({
  type: 'TOGGLE_LIKE_ON_MOVIE',
  index: index
})

const fetchFavoriteMoviesAction = (index) => ({
  type: 'FETCH_Favorite_MOVIES',
  index: index
})

const addMovieAction = (value) => ({
  type: 'ADD_MOVIE',
  value: value
})

export {
  fetchMoviesAction,
  likeMovieAction,
  fetchFavoriteMoviesAction,
  addMovieAction
}