import React, { Component } from 'react';
import Title from './SearchTitle'

import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SearchTags extends Component {
  
  constructor(props) {
        super(props);
 
        this.state = {
            tags: [
                // { id: "Thailand", text: "Thailand" },
                // { id: "India", text: "India" }
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
        console.log(this.state.tags)
        
        const ReactTags__selected = document.getElementById("SearchTags-input")

        if(ReactTags__selected.hasChildNodes()) {

          let clear = document.getElementById("clearTag")
          clear.classList.add('active')
        }
    
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

    handleTagMenu = (e) => {
      const material = document.getElementById("SearchTags-input")
      material.classList.toggle("active")
    }

    handleClear = e => {

      this.setState({
        tags: []
      })

      const clear = document.getElementById("clearTag")
      clear.classList.remove('active')


    }

  render() {

    const { tags, suggestions } = this.state;

  return (
    <div className="SearchTags">

          <div className="titleSearchMenu" id="titleSearchGenre" onClick={this.handleTagMenu}>
            <div className="SearchTitle" >
              <h2 className="SearchTitle-text">
                Tags
              </h2>
            </div>

            <div className="searchTagMenu">
              <img src="/static/img/arrowUp.svg" alt=""/>
            </div>
          </div>

          <div className="SearchTags-input" id="SearchTags-input">
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              delimiters={delimiters} 
              placeholder="Search Tag"/>
              <button>
                <img className="SearchLocation-image" src="/static/img/search.svg" alt=""/>              
              </button>

            <span className="clearTag" id="clearTag" onClick={this.handleClear}><i>&#x2715;  </i> Clear selection </span>
          </div>



          <style>{`
            .titleSearchMenu {
              cursor: pointer;
            }

            .titleSearchMenu:hover .searchTagMenu,
            .titleSearchMenu.active .searchTagMenu{
              transform: rotate(180deg);
            }

            .SearchTitle {
              position: relative;
              padding: 10px;
              cursor: pointer;
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

            .SearchTags {
              background: white;
              box-sizing: border-box;
              font-family: sans-serif;
              border-radius: 5px;
              margin-bottom: 10px;
              position: relative;
              text-align: center;
            }

            .SearchTags-input {
              position: relative;
              display: none;
              min-height: 10px;
            }
            .SearchTags-input.active {
              display: block;
            }

            .searchTagMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
              transition: .25s linear;
            }

            .searchTagMenu img {
              width: 15px;
            }

            .searchTagMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
            }

            .SearchTags-input .ReactTags__tagInput{
              position: absolute;
              top: -55px;
              left: 20px;
              width: 89%;
              margin: auto;
            }

            .SearchTags-input .ReactTags__tagInput input{
              width: 100%;
              height: 40px;
              box-sizing: border-box;
              padding-left: 10px;
              border: 2px solid #d0d0d0;
              border-radius: 4px;
            }

            .SearchTags-input .ReactTags__remove {
              margin-left: 10px;
            }

            .ReactTags__selected {
              margin-top: 60px !important;
              text-align: left;
              padding-left: 17px;
            }

            .tag-wrapper {
              background: #1c2d4c;
              margin: 5px;
              color: #ff8f17;
              padding: 5px 10px;
              font-size: 15px;
              border-radius: 4px !important;
              display: inline-block;
            }

            .SearchTags button {
              position: absolute;
              top: -48px;
              right: 23px;
              width: 34px;
              height: 34px;
              background: transparent;
              border: none;
            }

            .clearTag {
              margin-top: 10px;
              margin-bottom: 10px;
              display: none;
              text-align: center;
              cursor: pointer;
              transition: .25s linear;
              padding: 5px;
              border: 1px solid transparent;
              font-weight: 100;
            }

            .clearTag:hover {
              background: #1c2d4c;
              border-radius: 4px;
              color: orange;
              border: 1px solid orange;
            }

            .clearTag.active {
              display: inline-block;
            }
          `}</style>


    </div>
  );
  }
}

export default SearchTags;
