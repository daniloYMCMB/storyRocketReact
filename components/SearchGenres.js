import React, { Component } from 'react';
import Title from './SearchTitle'

class SearchGenres extends Component {

  handleMenu = (e) => {
    const genre = document.getElementById("searchGenresList")
    genre.classList.toggle("active")
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
	        <Title title="Genres"></Title>

			<div onClick={this.handleMenu} className="searchGenresMenu">
				<img src="/static/img/arrowUp.svg" alt=""/>
			</div>

	        <div className="searchGenres-list" id="searchGenresList">
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

			<span className="clearGenre" id="clearGenre" onClick={this.handleClear}><i>X </i> Clear selection </span>
			
			<style>{`
				.searchGenres {
					font-family: sans-serif;
					background: white;
					padding: 10px;
					border-radius: 5px;
				  margin-bottom: 10px;
				  position: relative;
				}

				.searchGenres-list {
				  display: flex;
				  justify-content: space-around;
				  align-items: center;
				  display: none;
				}

				.searchGenresMenu {
				  position: absolute;
				  top: 23px;
				  right: 20px;
				  cursor: pointer;
				}

				.searchGenresMenu img {
				  width: 15px;
				}

				.searchGenres-list.active {
				  display: flex;
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
				  margin-top: 20px;
				  display: none;
				  text-align: center;
				  cursor: pointer;
				}

				.clearGenre.active {
				  display: block;
				}
			`}</style>

		</div>
	);
  }
}

export default SearchGenres;
