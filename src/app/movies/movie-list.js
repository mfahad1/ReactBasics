import React from 'react';
import { connect } from 'react-redux'
import './movies.css';
import { favMovieAction } from '../redux/actionsAndReducer/add-fav';


class MovieList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies:[
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
    }
  }

  renderMovies() {

    const likeOrUnlikeTheMovie = (indexOfMovie) => {
      let shallowCopyMovies = JSON.parse(JSON.stringify(this.state.movies));
      shallowCopyMovies[indexOfMovie].liked = !shallowCopyMovies[indexOfMovie].liked;
      this.setState({
        movies: shallowCopyMovies
      }, () => this.props.favMovieDispatch(this.state.movies.filter(movie => movie.liked)));
    }

    return this.state.movies.map((movie, index) => {
      const heartClass = movie.liked ? 'fas fa-heart' : 'far fa-heart';
      return (
        <div key={`key-${index}`}>
          <li className="list-group-item">
            <p>{movie.name}</p>
            <i onClick={() => likeOrUnlikeTheMovie(index)} className={heartClass}></i>
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
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  favMovieDispatch: (movies) => dispatch(favMovieAction(movies))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)