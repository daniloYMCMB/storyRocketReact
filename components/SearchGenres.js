import React, { Component } from 'react';
import Title from './SearchTitle'

class SearchGenres extends Component {

  handleOpenSearch = (e) => {
    const genre = document.getElementById("searchGenresList")
    genre.classList.toggle("active")

    const titleSearchMenu = document.getElementById("titleSearchGenre")
    titleSearchMenu.classList.toggle("active")
  }

  handleClear = e => {
    const genre = document.getElementsByClassName("styled-checkbox")

  	for(var i=0; i<genre.length; i++) {
  		if(genre[i].checked) {
  			genre[i].checked = false 
  		}
  	}

    const clear = document.getElementById("clearGenre")
    clear.classList.remove('active')

  }

  handleChangeGenre = e => {
    const clear = document.getElementById("clearGenre")

  	if(e.target.value){
		clear.classList.add('active')
  	} else {
		clear.classList.remove('active')
  	}
  }

  render() {

	return (
		<div className="searchGenres">
			<div className="titleSearchMenu" id="titleSearchGenre" onClick={this.handleOpenSearch}>
				<div className="SearchTitle" >
					<h2 className="SearchTitle-text">
						Genres
					</h2>
				</div>

				<div className="searchGenresMenu">
					<img src="/static/img/arrowUp.svg" alt=""/>
				</div>
			</div>

			<div className="searchGenres-container" id="searchGenresList">

				<div className="searchGenres-list">
					<ul>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box1" type="checkbox" value="value1"/>
					    	<label for="box1">Action</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box2" type="checkbox" value="value1"/>
					    	<label for="box2">Biography</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box3" type="checkbox" value="value1"/>
					    	<label for="box3">Documentary</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box8" type="checkbox" value="value1"/>
					    	<label for="box8">Thriller</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box9" type="checkbox" value="value1"/>
					    	<label for="box9">Faith</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box10" type="checkbox" value="value1"/>
					    	<label for="box10">Crime</label>
						</li>
					</ul>
					<ul>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box4" type="checkbox" value="value"/>
					    	<label for="box4">Graphic Novels</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box5" type="checkbox" value="value"/>
					    	<label for="box5">Film Noir</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box6" type="checkbox" value="value1"/>
					    	<label for="box6">Romance</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box11" type="checkbox" value="value"/>
					    	<label for="box11">War</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box12" type="checkbox" value="value"/>
					    	<label for="box12">Spy</label>
						</li>
						<li>
							<input onChange={this.handleChangeGenre} className="styled-checkbox" id="box13" type="checkbox" value="value1"/>
					    	<label for="box13">Mafia</label>
						</li>
					</ul>
				</div>

				<span className="clearGenre" id="clearGenre" onClick={this.handleClear}><i>&#x2715;  </i> Clear selection </span>

			</div>
			
			<style>{`
				.titleSearchGenre {
					cursor: pointer;
				}

				.titleSearchMenu:hover .searchGenresMenu,
				.titleSearchMenu.active .searchGenresMenu{
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

				.searchGenres {
					font-family: sans-serif;
					background: white;
					border-radius: 5px;
				  margin-bottom: 10px;
				  position: relative;
				  text-align: center;
				}

				.searchGenres-container {
					display: none;
				}

				.searchGenres-container.active {
					display: block;
				}

				.searchGenres-list {
				  display: flex;
				  justify-content: space-around;
				  align-items: center;
				  padding: 10px;
				}

				.searchGenresMenu {
				  position: absolute;
				  top: 23px;
				  right: 20px;
				  cursor: pointer;
				  transition: .25s linear;
				}

				.searchGenresMenu img {
				  width: 15px;
				}
				
				.searchGenres-list ul{
				  
				}
				.searchGenres-list li{
				  text-align: left;
				  margin-bottom: 10px;
				}

				.styled-checkbox {
				  position: absolute;
				  opacity: 0;
				}
				.styled-checkbox + label {
				  position: relative;
				  cursor: pointer;
				  padding: 0;
				}
				.styled-checkbox + label:before {
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
				.styled-checkbox:hover + label:before {
				  background: white;
				}
				.styled-checkbox:focus + label:before {
				  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
				}
				.styled-checkbox:checked + label:before {
				  background: #1c2d4c;
				}
				.styled-checkbox:disabled + label {
				  color: #b8b8b8;
				  cursor: auto;
				}
				.styled-checkbox:disabled + label:before {
				  box-shadow: none;
				  background: #ddd;
				}
				.styled-checkbox:checked + label:after {
				  content: '';
				  position: absolute;
				  left: 4px;
				  top: 8px;
				  background: orange;
				  width: 2px;
				  height: 2px;
				  box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;
				  transform: rotate(45deg);
				}

				.clearGenre {
				  margin-bottom: 10px;
				  display: none;
				  text-align: center;
				  cursor: pointer;
				  transition: .25s linear;
				  padding: 5px;
				  border: 1px solid transparent;
				  font-weight: 100;
				}

		          .clearGenre:hover {
		            background: #1c2d4c;
		            border-radius: 4px;
		            color: orange;
		            border: 1px solid orange;
		          }

				.clearGenre.active {
				  display: inline-block;
				}
			`}</style>

		</div>
	);
  }
}

export default SearchGenres;
