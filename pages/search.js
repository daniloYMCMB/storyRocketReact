import React from 'react'
import Layout from '../components/Layout'

import SearchInput from '../components/SearchInput'
import SearchViews from '../components/SearchViews'

export default class Search extends React.Component {

	render() {
		return (
			<Layout title="Search">
			
				<div className="searchContainer df">
					<div className="searchSidebar">
						sidebar
						<SearchInput></SearchInput>
						<SearchViews></SearchViews>
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
						}

						.searchSidebar {
							width: 28%;
							background: purple;
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





