import React from 'react'
import Layout from '../components/Layout'

import SearchInput from '../components/SearchInput'
import SearchViews from '../components/SearchViews'
import SearchGenres from '../components/SearchGenres'
import SearchMaterialType from '../components/SearchMaterialType'
import SearchIntendedMedium from '../components/SearchIntendedMedium'
import SearchTags from '../components/SearchTags'
import SearchLanguages from '../components/SearchLanguages'
import SearchLocation from '../components/SearchLocation'
import SearchEra from '../components/SearchEra'

export default class Search extends React.Component {


	handleMenu () {
		const menu = document.getElementById("btnMenu")
		menu.classList.toggle('active')

		const sidebar = document.getElementById("searchSidebar")
		sidebar.classList.toggle('active')

	}

	render() {
		return (
			<Layout title="Search">
			
				<div className="searchContainer df">
					<div className="searchSidebar" id="searchSidebar">
						<div className="btnMenu" id="btnMenu" onClick={this.handleMenu}>
						</div>
						<SearchInput></SearchInput>
						<SearchViews></SearchViews>
						<SearchGenres></SearchGenres>
						<SearchMaterialType></SearchMaterialType>
						<SearchIntendedMedium></SearchIntendedMedium>
						<SearchTags></SearchTags>
						<SearchLanguages></SearchLanguages>
						<SearchLocation></SearchLocation>
						<SearchEra></SearchEra>
					</div>

					<div className="searchContent">
						content
					</div>

					<style>{`
						.searchContainer {
							padding: 10px;
							color: white;
							max-width: 1200px;
							width: 95%;
							margin: auto;
							position: relative;
						}

						.df {
							display: flex;
							justify-content: center;
							align-items: stretch;
						}

						.searchSidebar {
							width: 35%;
							margin-right: 2%;
							color: #1c2d4c;
							background: #f3f3f3;
						}

						.searchContent {
							width: 70%;
							background: orange;
							height: 1000vh;

						}

						@media screen and (max-width: 1000px) {
							.searchSidebar {
								width: 50%;
							}
						}

						@media screen and (max-width: 768px) {
							.searchSidebar {
								width: 290px;
								position: absolute;
								top: 0;
								left: -300px;
								transition: .5s linear;
							}
							.searchSidebar.active {
								left: 0;
							}

							.searchContent {
								width: 100%;
								background: orange;
							}

							.btnMenu {
								position: absolute;
								top: 5px;
								left: 304px;
								background: #1b2d4c;
								height: 30px;
								width: 30px;
								transition: .5s linear;
								cursor: pointer;
							}

							.btnMenu:before {
								content: "";
								width: 20px;
								height: 3px;
								background: #f3f3f3;
								position: absolute;
								top: 9px;
								left: 5px;
							}

							.btnMenu:after {
								content: "";
								width: 20px;
								height: 3px;
								background: #f3f3f3;
								position: absolute;
								top: 17px;
								left: 5px;
							}
						}
					`}</style>

				</div>

				<style>{`
						.mia {
							display: block;
						}


						svg {
							display: inline-block;
							height: 200px;
							stroke: #1c2d4c;
							stroke-width: 7px;
							fill: purple;
							margin: 0 auto;
						}

						svg path {
							stroke-dasharray: 300,0,3000;
						}

						

						@keyframes twitter {
							10% {
								stroke-dasharray: 0,500,2300
							}
							100% {
								stroke-dasharray: 2900,500,2900
							}
						}
				`}</style>

			</Layout>
		)
	}

}





