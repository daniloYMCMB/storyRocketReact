import React, { Component } from 'react';
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
            <img src="/static/img/arrowUp.svg" alt=""/>
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
            <img className="SearchLocation-image" src="/static/img/search.svg" alt=""/>
          </div>

          <style>{`
            .SearchLocation {
              background: white;
              padding: 10px;
              box-sizing: border-box;
              font-family: sans-serif;
              border-radius: 5px;
              margin-bottom: 10px;
              position: relative;
            }

            .SearchLocation-title {
              text-align: left;
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 15px;
            }

            .searchLocationMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
            }

            .searchLocationMenu img {
              width: 15px;
            }

            .SearchLocation-input {
              position: relative;
              display: none;
            }

            .SearchLocation-input.active {
              display: block;
            }

            .SearchLocation-input .ReactTags__tags{
              position: relative;
            }

            .SearchLocation-image {
              position: absolute;
              top: -37px;
              right: 27px;
              width: 20px;
              height: 20px;
            }

            .SearchLocation-input .ReactTags__tagInput{
              position: absolute;
              top: -45px;
              left: 15px;
              width: 90%;
              margin: auto;
            }

            .SearchLocation-input .ReactTags__tagInput input{
              width: 100%;
              height: 30px;
              box-sizing: border-box;
              padding-left: 10px;
            }

            .ReactTags__selected {
              margin-top: 70px;
              text-align: left;
              padding-left: 17px;
            }

            .tag-wrapper {
              background: #1c2d4c;
              margin: 5px;
              color: #ff8f17;
              padding: 5px 10px;
              font-size: 15px;
              border-radius: 15px;
              display: inline-block;
              
            }
          `}</style>

    </div>
  );
  }
}

export default SearchLocation;
