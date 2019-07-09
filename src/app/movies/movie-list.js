import React from 'react';
import { connect } from 'react-redux'
import './movies.css';
import { fetchMoviesAction, likeMovieAction, addMovieAction } from '../redux/actions/movie.action';


class MovieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputMovie: ''
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

        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Movie Name"
            value={this.state.inputMovie}
            onChange={(e) => this.setState({ inputMovie: e.target.value })}
          />
          <div className="input-group-append">
            <button 
              type="button" 
              className="btn btn-info" 
              onClick={() => this.props.addMovieAction(this.state.inputMovie)}>
              Add
            </button>
          </div>
        </div>

        <ul className="list-group">
          {this.renderMovies()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  movies: state.moviesReducer.movies
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMoviesAction: () => dispatch(fetchMoviesAction()),
  likeMovieAction: (id) => dispatch(likeMovieAction(id)),
  addMovieAction: (value) => dispatch(addMovieAction(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)