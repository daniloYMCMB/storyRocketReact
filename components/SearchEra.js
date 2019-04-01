import React, { Component } from 'react';

class SearchEra extends Component {

  handleMenuEra = (e) => {
    const era = document.getElementById("searchEraMenu-list")
    era.classList.toggle("active")
  }

  handleClear = e => {
    const genre = document.getElementsByClassName("styled-checkboxEra")
    for(var i=0; i<genre.length; i++) {
      if(genre[i].checked) {
        genre[i].checked = false 
      }
    }
    const clear = document.getElementById("clearEra")
    clear.classList.remove('active')
  }

  handleChangeEra = e => {
      const clear = document.getElementById("clearEra")

      if(e.target.value){
        clear.classList.add('active')
      } else {
        clear.classList.remove('active')
      }
  }

  render() {

  return (
    <div className="SearchEra">

          <div className="titleSearchMenu" id="titleSearchGenre" onClick={this.handleMenuEra}>
            <div className="SearchTitle" >
              <h2 className="SearchTitle-text">
                Era
              </h2>
            </div>

            <div className="searchEraMenu">
              <img src="/static/img/arrowUp.svg" alt=""/>
            </div>
          </div>

          <div className="searchEraMenu-container" id="searchEraMenu-list">
            <div className="searchEraMenu-list">
              <ul>
                <li>
                  <input onChange={this.handleChangeEra}  className="styled-checkboxEra" id="era1" type="checkbox" value="value1"/>
                    <label for="era1">Antiguo</label>
                </li>
                <li>
                  <input onChange={this.handleChangeEra}  className="styled-checkboxEra" id="era2" type="checkbox" value="value1"/>
                    <label for="era2">Contemporáneo</label>
                </li>
              </ul>
              <ul>
                <li>
                  <input onChange={this.handleChangeEra}  className="styled-checkboxEra" id="era5" type="checkbox" value="value"/>
                    <label for="era5">Actual</label>
                </li>
                <li>
                  <input onChange={this.handleChangeEra}  className="styled-checkboxEra" id="era6" type="checkbox" value="value"/>
                    <label for="era6">Tendencia</label>
                </li>

              </ul>
            </div>

            <span className="clearEra" id="clearEra" onClick={this.handleClear}><i>&#x2715; </i> Clear selection </span>
          </div>

          <style>{`
            .titleSearchGenre {
              cursor: pointer;
            }

            .titleSearchMenu:hover .searchEraMenu,
            .titleSearchMenu.active .searchEraMenu{
              transform: rotate(180deg);
            }

            .SearchEra {
              background: white;
              box-sizing: border-box;
              font-family: sans-serif;
              border-radius: 5px;
              margin-bottom: 10px;
              position: relative;
              text-align: center;
            }

            .searchEraMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
              transition: .25s linear;
            }

            .searchEraMenu img {
              width: 15px;
            }

            .searchEraMenu-container {
              display: none;
            }

            .searchEraMenu-container.active {
              display: block;
            }
      
            .searchEraMenu-list {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 25px 15px 25px;
            }
            .searchEraMenu-list ul{
              
            }
            .searchEraMenu-list li{
              text-align: left;
              margin-bottom: 10px;
            }

            .styled-checkboxEra {
              position: absolute;
              opacity: 0;
            }
            .styled-checkboxEra + label {
              position: relative;
              cursor: pointer;
              padding: 0;
            }
            .styled-checkboxEra + label:before {
              content: '';
              margin-right: 10px;
              display: inline-block;
              vertical-align: text-top;
              width: 15px;
              height: 15px;
              background: white;
              border: 2px solid #160e26;
              border-radius: 4px;
            }
            .styled-checkboxEra:hover + label:before {
              background: white;
            }
            .styled-checkboxEra:focus + label:before {
              box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
            }
            .styled-checkboxEra:checked + label:before {
              background: #1c2d4c;
            }
            .styled-checkboxEra:disabled + label {
              color: #b8b8b8;
              cursor: auto;
            }
            .styled-checkboxEra:disabled + label:before {
              box-shadow: none;
              background: #ddd;
            }
            .styled-checkboxEra:checked + label:after {
              content: '';
              position: absolute;
              left: 4px;
              top: 8px;
              background: orange;
              width: 2px;
              height: 2px;
              box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;
              -webkit-transform: rotate(45deg);
                      transform: rotate(45deg);
            }

            .clearEra {
              margin-bottom: 10px;
              display: none;
              text-align: center;
              cursor: pointer;
              transition: .25s linear;
              padding: 5px;
              border: 1px solid transparent;
              font-weight: 100;
            }

            .clearEra:hover {
              background: #1c2d4c;
              border-radius: 4px;
              color: orange;
              border: 1px solid orange;
            }

            .clearEra.active {
              display: inline-block;
            }

            @media screen and (max-width: 800px) {
              .searchEraMenu-list {
                padding: 10px 10px 15px 10px;
              }
            }

          `}</style>

    </div>
  );
  }
}

export default SearchEra;
