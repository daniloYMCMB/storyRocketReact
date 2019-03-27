import React, { Component } from 'react';
import search from '.././assets/img/search.svg'
import  './SearchInput.css';

class SearchInput extends Component {



  render() {

    return (
      <div className="searchInput">
        <form action="">
          <input type="text" placeholder="Search author or title"/>
          <button>
            <img src={search} alt=""/>
          </button>  
        </form>
      </div>
    );
  }
}

export default SearchInput;
