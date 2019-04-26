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

      const titleSearchGenre = document.getElementById("titleSearchTags")
      titleSearchGenre.classList.toggle("active")
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

          <div className="titleSearchMenu" id="titleSearchTags" onClick={this.handleTagMenu}>
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
                <svg style={{width: 20, height: 20, fill: '#ffa603', stroke: '#ffa603', cursor: 'pointer'}} viewBox="0 0 250.313 250.313">
                  <g id="Search">
                    <path d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
                      c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
                      c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
                      c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
                      c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
                      C170.146,140.044,140.043,170.146,102.911,170.146z"/>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                </svg>             
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
              font-size: 14px;
            }

            .SearchTags-input .ReactTags__tagInput input:focus::placeholder {
              color: white;
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
              top: -52px;
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
              line-height: 1.3;
            }

            .clearTag:hover {
              border-radius: 4px;
              color: #1c2d4c;
              border: 1px solid #1c2d4c;
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
