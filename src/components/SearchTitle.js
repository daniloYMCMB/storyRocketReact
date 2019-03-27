import React, { Component } from 'react';
import search from '.././assets/img/search.svg'
import  './SearchTitle.css';

class SearchTitle extends Component {

  render() {

  return (
    <div className="SearchTitle">
          <h2 className="SearchTitle-text">
            {this.props.title}
          </h2>
    </div>
  );
  }
}

export default SearchTitle;
