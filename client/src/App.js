import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <ul className='navbar'>
          <li className='home-button'>
            <Link to='/movies'>Movies</Link>
          </li>
        </ul>
        <SavedList list={this.state.savedList} />
        <Route exact path='/movies' component={MovieList} />
        <Route path='/movies/:id' component={Movie} />
      </div>
    );
  }
}
