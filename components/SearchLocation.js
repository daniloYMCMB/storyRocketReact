import React, { Component } from 'react';
import Title from './SearchTitle'

import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SearchLocation extends Component {

  handleMenuLocation = (e) => {
    const material = document.getElementById("SearchLocation-input")
    material.classList.toggle("active")
    
    const titleSearchLocation = document.getElementById("titleSearchLocation")
    titleSearchLocation.classList.toggle("active")
  }

  render() {

  return (
    <div className="SearchLocation">

          <div className="titleSearchMenu" id="titleSearchLocation" onClick={this.handleMenuLocation}>
            <div className="SearchTitle" >
              <h2 className="SearchTitle-text">
                Location
              </h2>
            </div>

            <div className="searchLocationMenu">
              <img src="/static/img/arrowUp.svg" alt=""/>
            </div>
          </div>

          <div className="SearchLocation-input" id="SearchLocation-input">
            <form>
              <input type="text" placeholder="Search Location"/>
              <button>
                <svg style={{width: 20, height: 20, fill: '#ffa603', stroke: '#ffa603', cursor: 'pointer'}} viewBox="0 0 250.313 250.313">
                  <g id="Search">
                    <path d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
                      c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
                      c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
                      c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
                      c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
                      C170.146,140.044,140.043,170.146,102.911,170.146z"/>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                </svg>    
              </button>
            </form>
          </div>

          <style>{`
            .titleSearchGenre {
              cursor: pointer;
            }

            .titleSearchMenu:hover .searchLocationMenu,
            .titleSearchMenu.active .searchLocationMenu{
              transform: rotate(180deg);
            }

            .SearchTitle {
              position: relative;
              padding: 10px;
              cursor: pointer;
            }

            .SearchTitle-text {
              text-align: left;
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 15px;
              margin-top: 10px;
              margin-left: 10px;
              text-align: left;
            }

            .SearchLocation {
              background: white;
              box-sizing: border-box;
              font-family: sans-serif;
              border-radius: 5px;
              margin-bottom: 10px;
              position: relative;
            }

            .SearchLocation-title {
              text-align: left;
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 15px;
            }

            .searchLocationMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
              transition: .25s linear;
            }

            .searchLocationMenu img {
              width: 15px;
            }

            .SearchLocation-input {
              position: relative;
              display: none;
              padding: 10px 10px 20px 10px;
              width: 89%;
              margin: auto;
            }

            .SearchLocation-input.active {
              display: block;
            }

            .SearchLocation-image {
              // position: absolute;
              // top: -37px;
              // right: 27px;
              // width: 20px;
              // height: 20px;
            }

            .SearchLocation-input button {
              position: absolute;
              top: 15px;
              right: 14px;
              width: 34px;
              height: 34px;
              background: transparent;
              border: none;
            }

            .SearchLocation-input input {
              width: 100%;
              height: 40px;
              box-sizing: border-box;
              padding-left: 10px;
              border: 2px solid #d0d0d0;
              border-radius: 4px;
              font-size: 14px;
            }

            .SearchLocation-input input:focus::placeholder {
              color: white;
            }
          `}</style>

    </div>
  );
  }
}

export default SearchLocation;
