import React, { Component } from 'react';
import arrowUp from '.././assets/img/arrowUp.svg'
import  './SearchGenres.css';
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
				<img src={arrowUp} alt=""/>
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
		</div>
	);
  }
}

export default SearchGenres;
