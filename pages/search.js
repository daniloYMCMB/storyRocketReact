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

	render() {
		return (
			<Layout title="Search">
			
				<div className="searchContainer df">
					<div className="searchSidebar">
						sidebar
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
							background: blue;
							padding: 10px;
							color: white;
							max-width: 1200px;
							width: 95%;
							margin: auto;
						}

						.df {
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
						}

						.searchSidebar {
							width: 58%;
							margin-right: 2%;
							color: #1c2d4c;
						}

						.searchContent {
							width: 70%;
							background: orange;
						}
					`}</style>

				</div>

			</Layout>
		)
	}

}





