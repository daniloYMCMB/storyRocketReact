import React, { Component } from 'react';

class SearchInput extends Component {


	render() {

		return (
			<div className="searchInput">
				<form action="">
					<input type="text" placeholder="Search author or title"/>
					<button>
						<img src="/static/img/search.svg" alt=""/>
					</button>  
				</form>

				<style>{`
					.searchInput {
						background: white;
						color: #bdbbc2;
						position: relative;
						margin: 0 0 10px 0;
						border-radius: 4px;
						overflow: hidden;
					}

					.searchInput input {
						width: 100%;
						height: 40px;
						padding-left: 10px;
						border: 1px solid #0000000f;
						box-sizing: border-box;
						font-size: 14px;
					}

					.searchInput button {
						position: absolute;
						width: 30px;
						height: 30px;
						top: 0px;
						right: 10px;
						bottom: 0;
						margin: auto;
						border: none;
						background: transparent;
					}

					.searchInput img {
						margin-top: 7px;
						display: block;
					}
				`}</style>

			</div>
		);
	}
}

export default SearchInput;
