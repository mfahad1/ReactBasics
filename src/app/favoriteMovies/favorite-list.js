import React from 'react';
import { connect } from 'react-redux'
import { fetchFavoriteMoviesAction } from '../redux/actions/movie.action';


class FavoriteMovieList extends React.Component {

  constructor(props) {
    super(props)
  }

  renderMovies = () => {
    console.log(this.props);
    return this.props.favMovies.map((movie, index) => {
      return (
        <div key={`key-${index}`}>
          <li className="list-group-item">
            <p>{movie.name}</p>
          </li>
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchFavoriteMoviesAction();
  }
  


  render() {
    return (
      <div className="container">
        <h1>
          Favorite List
        </h1>
        <ul className="list-group">
          {this.renderMovies()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favMovies: state.moviesReducer.favMovies
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFavoriteMoviesAction: () => dispatch(fetchFavoriteMoviesAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteMovieList)