import React from 'react';
import { connect } from 'react-redux'


class FavouriteMovieList extends React.Component {

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


  render() {
    return (
      <div className="container">
        <h1>
          Movie List
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
    favMovies: state.favMovieReducer.favMovies
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteMovieList)