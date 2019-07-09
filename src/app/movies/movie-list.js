import React from 'react';
import { connect } from 'react-redux'
import './movies.css';
import { fetchMoviesAction, likeMovieAction } from '../redux/actionsAndReducer/add-fav';


class MovieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    console.log('here here');
    this.props.fetchMoviesAction();
  }

  renderMovies() {
    return this.props.movies.map((movie, index) => {
      const heartClass = movie.liked ? 'fas fa-heart' : 'far fa-heart';
      return (
        <div key={`key-${index}`}>
          <li className="list-group-item">
            <p>{movie.name}</p>
            <i onClick={() => this.props.likeMovieAction(index)} className={heartClass}></i>
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

const mapStateToProps = (state, ownProps) => ({
  movies: state.favMovieReducer.movies
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMoviesAction: () => dispatch(fetchMoviesAction()),
  likeMovieAction: (id) => dispatch(likeMovieAction(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)