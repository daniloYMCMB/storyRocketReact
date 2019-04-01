import React, { Component } from 'react';

class SearchTitle extends Component {

  handleMenu = (e) => {
    const genre = document.getElementById("searchGenresList")
    genre.classList.toggle("active")
  }

  render() {

  return (
    <div className="SearchTitle" onClick={this.handleMenu} >
          <h2 className="SearchTitle-text">
            {this.props.title}
          </h2>

          <style jsx>{`
			.SearchTitle {
				position: relative;
				padding: 10px;
				cursor: pointer;
				margin-bottom: 20px;
			}

			.SearchTitle:hover .searchGenresMenu,
			.SearchTitle.active .searchGenresMenu{
				transform: rotate(180deg);
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

			.searchGenresMenu {
			  position: absolute;
			  top: 23px;
			  right: 20px;
			  cursor: pointer;
			  transform: rotate(0deg);
		      transition: .25s linear;
			}

			.searchGenresMenu img {
			  width: 15px;
			}

		`}</style>
    </div>
  );
  }
}

export default SearchTitle;
