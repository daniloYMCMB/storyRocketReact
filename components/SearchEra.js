import React, { Component } from 'react';
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
            <img src="/static/img/arrowUp.svg" alt=""/>
          </div>

          <div className="SearchEra-input" id="SearchEra-input">
              <input className="e-range" type="range" min="0" max="10"/>
          </div>

          <style>{`
            .SearchEra {
              background: white;
              padding: 10px;
              box-sizing: border-box;
              font-family: sans-serif;
              border-radius: 5px;
              margin-bottom: 10px;
              position: relative;
            }

            .searchEraMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
            }

            .searchEraMenu img {
              width: 15px;
            }

            .SearchEra-input {
              display: none;
            }

            .SearchEra-input.active {
              display: block;
            }

            .e-range {
              display: block;
              -webkit-appearance: none;
                 -moz-appearance: none;
                      appearance: none;
              width: 90%;
              margin: auto;
              height: 30px;
              overflow: hidden;
              cursor: pointer;
            }
            .e-range:focus {
              outline: none;
            }

            /*linea*/
            .e-range::-webkit-slider-runnable-track {
              width: 100%;
              height: 15px;
              /*background: linear-gradient(to bottom, #ffdc46, #ffdc46) 100% 50%/100% 3px no-repeat transparent;*/
              background: #ffdc46;
            }

            /*bola*/
            .e-range::-webkit-slider-thumb {
              position: relative;
              -webkit-appearance: none;
                      appearance: none;
              height: 20px;
              width: 20px;
              background: #11072f;
              border: 0;
              top: -2px;
              transition: background-color 150ms;
            }

            .e-range::-moz-range-track,
            .e-range::-moz-range-progress {
              width: 100%;
              height: 30px;
              background: #cfcfcf;
            }

            .e-range::-moz-range-progress {
              background: linear-gradient(to bottom, #0199ff, #0199ff) 100% 50%/100% 3px no-repeat transparent;
            }

            .e-range::-moz-range-thumb {
              -moz-appearance: none;
                   appearance: none;
              margin: 0;
              height: 13px;
              width: 13px;
              background: #0199ff;
              border-radius: 100%;
              border: 0;
              transition: background-color 150ms;
            }

            .e-range::-ms-track {
              width: 100%;
              height: 30px;
              border: 0;
              color: transparent;
              background: transparent;
            }
          `}</style>

    </div>
  );
  }
}

export default SearchEra;
