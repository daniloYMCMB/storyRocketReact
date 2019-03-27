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
        <Title title="Tags"></Title>

        <div onClick={this.handleTagMenu} className="searchTagMenu">
          <img src="/static/img/arrowUp.svg" alt=""/>
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
          </div>

          <span className="clearTag" id="clearTag" onClick={this.handleClear}><i>X </i> Clear selection </span>


          <style>{`
            .SearchTags {
              background: white;
              padding: 10px;
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
            }
            .SearchTags-input.active {
              display: block;
            }

            .searchTagMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
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
              top: -45px;
              left: 20px;
              width: 80%;
              margin: auto;
            }

            .SearchTags-input .ReactTags__tagInput input{
              width: 100%;
              height: 40px;
              box-sizing: border-box;
              padding-left: 10px;
              border: 1px solid #80808038;
              border-radius: 4px;
            }

            .SearchTags-input .ReactTags__remove {
              margin-left: 10px;
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
              border-radius: 4px !important;
              display: inline-block;
              
            }

            .clearTag {
              margin-top: 20px;
              display: none;
              text-align: center;
              cursor: pointer;
            }

            .clearTag.active {
              display: block;
            }
          `}</style>


    </div>
  );
  }
}

export default SearchTags;
