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
  }

  render() {

  return (
    <div className="SearchLocation">

          <div className="titleSearchMenu" id="titleSearchGenre" onClick={this.handleMenuLocation}>
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
                <img className="SearchLocation-image" src="/static/img/search.svg" alt=""/>              
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
              top: 17px;
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
            }
          `}</style>

    </div>
  );
  }
}

export default SearchLocation;
