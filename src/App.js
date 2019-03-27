import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'reset-css'

import SearchViews from './components/SearchViews'
import SearchInput from './components/SearchInput'
import SearchGenres from './components/SearchGenres'
import SearchMaterialType from './components/SearchMaterialType'
import SearchIntendedMedium from './components/SearchIntendedMedium'
import SearchTags from './components/SearchTags'
import SearchLanguages from './components/SearchLanguages'
import SearchLocation from './components/SearchLocation'
import SearchEra from './components/SearchEra'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="sidebar">
            <SearchInput></SearchInput>
            <SearchViews></SearchViews>
            <SearchGenres></SearchGenres>
            <SearchMaterialType></SearchMaterialType>
            <SearchIntendedMedium></SearchIntendedMedium>
            <SearchTags></SearchTags>
            <SearchLanguages></SearchLanguages>
            <SearchLocation></SearchLocation>
            <SearchEra></SearchEra>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
