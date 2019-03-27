import React, { Component } from 'react';
import Title from './SearchTitle'

class SearchLanguages extends Component {


  handleLanguage = (e) => {
    const language = document.getElementById("searchLanguages-list")
    language.classList.toggle("active")
  }

	
	handleClear = e => {

		const genre = document.getElementsByClassName("styled-checkboxLanguages")

		for(var i=0; i<genre.length; i++) {
			if(genre[i].checked) {
				genre[i].checked = false 
			}
		}

		const clear = document.getElementById("clearLanguage")
		clear.classList.remove('active')


	}

	handleChangeGenre = e => {

	    const clear = document.getElementById("clearLanguage")

	  	if(e.target.value){
			clear.classList.add('active')
	  	} else {
			clear.classList.remove('active')
	  	}

	}

  render() {


	return (
		<div className="searchLanguages">
	       
        	<Title title="Languages"></Title>

	        <div onClick={this.handleLanguage} className="searchLanguagesMenu">
				<img src="/static/img/arrowUp.svg" alt=""/>
	        </div>

	        <div className="searchLanguages-list" id="searchLanguages-list">
				<ul>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja1" type="checkbox" value="value1"/>
				    	<label for="caja1">English</label>
					</li>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja2" type="checkbox" value="value1"/>
				    	<label for="caja2">Spanish</label>
					</li>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja3" type="checkbox" value="value1"/>
				    	<label for="caja3">French</label>
					</li>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja8" type="checkbox" value="value1"/>
				    	<label for="caja8">Arabic</label>
					</li>
				</ul>
				<ul>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja4" type="checkbox" value="value"/>
				    	<label for="caja4">Icelandinc</label>
					</li>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja5" type="checkbox" value="value"/>
				    	<label for="caja5">Portuguese</label>
					</li>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja6" type="checkbox" value="value1"/>
				    	<label for="caja6">Chinese</label>
					</li>
					<li>
						<input onChange={this.handleChangeGenre}  className="styled-checkboxLanguages" id="caja11" type="checkbox" value="value"/>
				    	<label for="caja11">Dutch</label>
					</li>
				</ul>

	        </div>

			<span className="clearLanguage" id="clearLanguage" onClick={this.handleClear}><i>X </i> Clear selection </span>

	        <style>{`
				.searchLanguages {
					font-family: sans-serif;
					background: white;
					padding: 10px;
					border-radius: 5px;
					margin-bottom: 10px;
					position: relative;
				}

				.searchLanguages-title {
					text-align: left;
					font-size: 18px;
					font-weight: bold;
					margin-bottom: 25px;
					font-family: sans-serif;
				}

				.searchLanguagesMenu {
				  position: absolute;
				  top: 23px;
				  right: 20px;
				  cursor: pointer;
				}

				.searchLanguagesMenu img {
				  width: 15px;
				}

				.searchLanguages-list {
				  display: none;
				  justify-content: space-around;
				  align-items: center;
				}

				.searchLanguages-list.active {
				  display: flex;
				}
				.searchLanguages-list ul{
				  
				}
				.searchLanguages-list li{
				  text-align: left;
				  margin-bottom: 10px;
				}

				.styled-checkboxLanguages {
				  position: absolute;
				  opacity: 0;
				}
				.styled-checkboxLanguages + label {
				  position: relative;
				  cursor: pointer;
				  padding: 0;
				}
				.styled-checkboxLanguages + label:before {
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
				.styled-checkboxLanguages:hover + label:before {
				  background: white;
				}
				.styled-checkboxLanguages:focus + label:before {
				  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
				}
				.styled-checkboxLanguages:checked + label:before {
				  background: #1c2d4c;
				}
				.styled-checkboxLanguages:disabled + label {
				  color: #b8b8b8;
				  cursor: auto;
				}
				.styled-checkboxLanguages:disabled + label:before {
				  box-shadow: none;
				  background: #ddd;
				}
				.styled-checkboxLanguages:checked + label:after {
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

				.clearLanguage {
				  margin-top: 20px;
				  display: none;
				  text-align: center;
				  cursor: pointer;
				}

				.clearLanguage.active {
				  display: block;
				}

			`}</style>
		</div>
	);
  }
}

export default SearchLanguages;
