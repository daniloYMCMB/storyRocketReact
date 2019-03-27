import React, { Component } from 'react';
import arrowUp from '.././assets/img/arrowUp.svg'
import  './SearchEra.css';
import Title from './SearchTitle'

class SearchEra extends Component {

  handleMenuEra = (e) => {
    const era = document.getElementById("SearchEra-input")
    era.classList.toggle("active")
  }
  render() {

  return (
    <div className="SearchEra">
         
          <Title title="Era"></Title>

          <div onClick={this.handleMenuEra} className="searchEraMenu">
            <img src={arrowUp} alt=""/>
          </div>

          <div className="SearchEra-input" id="SearchEra-input">
              <input className="e-range" type="range" min="0" max="10"/>
          </div>
    </div>
  );
  }
}

export default SearchEra;
