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

import PopUpStory from '../components/PopUpStory'

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
							background: white;
							height: 100vh;

						}

						@media screen and (max-width: 1100px) {
							.searchSidebar {
								width: 45%;
							}
						}

						@media screen and (max-width: 970px) {
							.searchSidebar {
								width: 55%;
							}
						}

						@media screen and (max-width: 850px) {
							.searchSidebar {
								width: 65%;
							}
						}

						@media screen and (max-width: 767px) {
							.searchSidebar {
								width: 290px;
								position: absolute;
								top: 0;
								left: -300px;
								transition: .5s linear;
							}
							.searchSidebar.active {
								left: 0;
								padding-right: 10px;
								border-radius: 0 0 10px 0;
							}

							.searchContent {
								width: 100%;
								background: orange;
							}

							.btnMenu {
								position: absolute;
								top: 0px;
								left: 290px;
								background: #1b2d4c;
								height: 30px;
								width: 30px;
								transition: .5s linear;
								cursor: pointer;
								padding: 5px;
								border-radius: 0 0 5px 0;
							}

							.btnMenu:before {
								content: "";
								width: 20px;
								height: 3px;
								background: #f3f3f3;
								position: absolute;
								top: 14px;
								left: 9px;
							}

							.btnMenu:after {
								content: "";
								width: 20px;
								height: 3px;
								background: #f3f3f3;
								position: absolute;
								top: 22px;
								left: 9px;
							}

							.btnMenu.active {
								left: 300px;
							}

							.searchGenres-list {
								padding: 10px 10px 15px 10px;
							}

							.searchLanguages-list {
								padding: 10px 10px 15px 10px;
							}

							.searchEraMenu-list {
								padding: 10px 10px 15px 10px;
							}

							@media screen and (max-width: 600px) {
								.searchSidebar {
									left: -294px;
								}
								.searchSidebar.active {
									left: 5px;
								}
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





