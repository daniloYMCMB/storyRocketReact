import React, { Component } from 'react';
import search from '.././assets/img/search.svg'
import arrowUp from '.././assets/img/arrowUp.svg'
import  './SearchLocation.css';
import Title from './SearchTitle'

import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SearchLocation extends Component {
  
  constructor(props) {
        super(props);
 
        this.state = {
            tags: [
             ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }


  handleMenuLocation = (e) => {
    const material = document.getElementById("SearchLocation-input")
    material.classList.toggle("active")
  }

  render() {

    const { tags, suggestions } = this.state;

  return (
    <div className="SearchLocation">
         
          <Title title="Location"></Title>

          <div onClick={this.handleMenuLocation} className="searchLocationMenu">
            <img src={arrowUp} alt=""/>
          </div>

          <div className="SearchLocation-input" id="SearchLocation-input">
            <ReactTags 
              tags={tags}
              suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              delimiters={delimiters} 
              placeholder="Search Location"/>
            <img className="SearchLocation-image" src={search} alt=""/>
          </div>
    </div>
  );
  }
}

export default SearchLocation;
