import React, { Component } from 'react';
import arrowUp from '.././assets/img/arrowUp.svg'
import  './SearchLanguages.css';
import Title from './SearchTitle'

class searchLanguages extends Component {


  handleLanguage = (e) => {
    const language = document.getElementById("searchLanguages-list")
    language.classList.toggle("active")
  }

  render() {


	return (
		<div className="searchLanguages">
	       
        	<Title title="Languages"></Title>

	        <div onClick={this.handleLanguage} className="searchLanguagesMenu">
				<img src={arrowUp} alt=""/>
	        </div>

	        <div className="searchLanguages-list" id="searchLanguages-list">
				<ul>
					<li>
						<input className="styled-checkbox" id="caja1" type="checkbox" value="value1"/>
				    	<label for="caja1">English</label>
					</li>
					<li>
						<input className="styled-checkbox" id="caja2" type="checkbox" value="value1"/>
				    	<label for="caja2">Spanish</label>
					</li>
					<li>
						<input className="styled-checkbox" id="caja3" type="checkbox" value="value1"/>
				    	<label for="caja3">French</label>
					</li>
					<li>
						<input className="styled-checkbox" id="caja8" type="checkbox" value="value1"/>
				    	<label for="caja8">Arabic</label>
					</li>
				</ul>
				<ul>
					<li>
						<input className="styled-checkbox" id="caja4" type="checkbox" value="value"/>
				    	<label for="caja4">Icelandinc</label>
					</li>
					<li>
						<input className="styled-checkbox" id="caja5" type="checkbox" value="value"/>
				    	<label for="caja5">Portuguese</label>
					</li>
					<li>
						<input className="styled-checkbox" id="caja6" type="checkbox" value="value1"/>
				    	<label for="caja6">Chinese</label>
					</li>
					<li>
						<input className="styled-checkbox" id="caja11" type="checkbox" value="value"/>
				    	<label for="caja11">Dutch</label>
					</li>
				</ul>

	        </div>
		</div>
	);
  }
}

export default searchLanguages;
