import React, { Component } from 'react';

class SearchTitle extends Component {

  render() {

  return (
    <div className="SearchTitle">
          <h2 className="SearchTitle-text">
            {this.props.title}
          </h2>

          <style jsx>{`
			.SearchTitle {
				position: relative;
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
		`}</style>
    </div>
  );
  }
}

export default SearchTitle;
