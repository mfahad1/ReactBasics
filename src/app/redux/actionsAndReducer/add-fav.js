const favMovieAction = favMovies => ({
  type: 'FAVOURITE_MODIFIED',
  favMovies,
})

const favMovieReducer = (state = {favMovies : []}, action) => {
  switch (action.type) {
    case 'FAVOURITE_MODIFIED':
      return Object.assign({}, state, {
        favMovies:  action.favMovies
      })
    default:
      return state
  }
}

export {
  favMovieAction,
  favMovieReducer
}