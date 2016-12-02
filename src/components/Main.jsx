import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
//components
import NavBar from './NavBar';
import Poster from './Poster';

const URL = 'http://www.omdbapi.com/';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      movies: []
    }

    this.movieSearch = _.debounce(() => {this.fetchMovies(this.state.query)}, 500)

  }
  
  fetchMovies(query) {
    return fetch(`${URL}?s=${query}`)
    .then(res => res.json())
    .then(json => this.setState({movies : json.Search}))
  }

  onInputChange(query) {
    this.setState({ query })
    this.movieSearch(query)
  }

  render() {
    let movie = this.state.movies[0]

    return (
      <div>
        <NavBar />
        <input onChange={(event) => this.onInputChange(event.target.value) } />
        <Poster movie={movie}/>
      </div>
    )
  }
}
