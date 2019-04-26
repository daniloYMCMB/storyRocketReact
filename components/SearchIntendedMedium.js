import React, { Component } from 'react';
import Title from './SearchTitle'

class SearchIntendedMedium extends Component {

  handleMaterialActive = (e) => {
    const materialTypeItem = document.getElementById("intended")
    materialTypeItem.classList.toggle('active')

    const clear = document.getElementById("clearIntended")

    clear.classList.add('active')
  }
  handleMaterialActive2 = (e) => {
    const materialTypeItem = document.getElementById("intended2")
    materialTypeItem.classList.toggle('active')

    const clear = document.getElementById("clearIntended")

    clear.classList.add('active')
  }
  handleMaterialActive3 = (e) => {
    const materialTypeItem = document.getElementById("intended3")
    materialTypeItem.classList.toggle('active')

    const clear = document.getElementById("clearIntended")

    clear.classList.add('active')
  }
  handleMaterialActive4 = (e) => {
    const materialTypeItem = document.getElementById("intended4")
    materialTypeItem.classList.toggle('active')

    const clear = document.getElementById("clearIntended")

    clear.classList.add('active')
  }
  handleMaterialActive5 = (e) => {
    const materialTypeItem = document.getElementById("intended5")
    materialTypeItem.classList.toggle('active')

    const clear = document.getElementById("clearIntended")

    clear.classList.add('active')
  }
  handleMaterialActive6 = (e) => {
    const materialTypeItem = document.getElementById("intended6")
    materialTypeItem.classList.toggle('active')

    const clear = document.getElementById("clearIntended")

    clear.classList.add('active')
  }
  handleClear = e => {

    const materialTypeItem = document.getElementsByClassName("SearchIntendedMedium-item")

    for(var i=0; i<materialTypeItem.length; i++) {
      console.log(materialTypeItem)
      if(materialTypeItem[i].classList.contains('active')) {
        materialTypeItem[i].classList.remove('active')
      }
    }

    const clear = document.getElementById("clearIntended")
    clear.classList.remove('active')    
  }
  handleIntended = (e) => {
    const intended = document.getElementById("SearchIntendedMedium-items")
    intended.classList.toggle("active")

    const SearchMaterialTypeList = document.getElementById("titleSearchIntendedMedium")
    SearchMaterialTypeList.classList.toggle("active")
  }

  render() {

    return (
      <div className="SearchIntendedMedium">

        <div className="titleSearchMenu" id="titleSearchIntendedMedium" onClick={this.handleIntended}>
          <div className="SearchTitle" >
            <h2 className="SearchTitle-text">
              Intended Medium
            </h2>
          </div>

          <div className="searchMaterialsMenu">
            <img src="/static/img/arrowUp.svg" alt=""/>
          </div>
        </div>

        <div className="SearchIntendedMedium-container" id="SearchIntendedMedium-items">
          <ul className="SearchIntendedMedium-items">
              <li className="SearchIntendedMedium-item" id="intended" onClick={this.handleMaterialActive}>
                  <a>
                    <div className="icon mia">
                      <svg x="0px" y="0px" viewBox="0 0 512.001 512.001" >
                        <g>
                          <g>
                            <path d="M481.086,188.037c-3.454-2.062-7.737-2.159-11.278-0.253l-73.901,39.777v-34.087c0-6.312-5.118-11.429-11.428-11.429
                              h-18.586c23.179-18.799,38.024-47.493,38.024-79.594C403.918,45.96,357.958,0,301.465,0c-48.218,0-88.757,33.487-99.598,78.424
                              c-14.182-17.112-35.587-28.032-59.497-28.032c-42.6,0-77.256,34.657-77.256,77.256c0,21.199,8.586,40.426,22.459,54.4H77.138
                              c-6.312,0-11.429,5.117-11.429,11.429v51.879H36.776c-6.312,0-11.429,5.117-11.429,11.429v44.944
                              c0,6.312,5.117,11.429,11.429,11.429h28.932v51.879c0,6.312,5.117,11.429,11.429,11.429h134.825l-61.946,118.825
                              c-2.918,5.596-0.746,12.499,4.851,15.417c1.688,0.88,3.494,1.297,5.273,1.297c4.123,0,8.105-2.239,10.143-6.147l60.523-116.098
                              l60.524,116.098c2.038,3.91,6.021,6.147,10.144,6.147c1.779,0,3.586-0.417,5.273-1.297c5.597-2.918,7.769-9.821,4.85-15.417
                              l-61.946-118.825h134.827c6.311,0,11.429-5.117,11.429-11.429v-34.088l73.901,39.777c1.694,0.911,3.555,1.365,5.416,1.365
                              c2.03,0,4.059-0.541,5.862-1.617c3.454-2.063,5.567-5.789,5.567-9.811V197.848C486.653,193.825,484.54,190.1,481.086,188.037z
                               M65.709,290.297H48.205V268.21h17.504V290.297z M301.465,22.857c43.888,0,79.595,35.706,79.595,79.595
                              c0,43.889-35.706,79.594-79.595,79.594c-43.888,0-79.594-35.706-79.594-79.594C221.872,58.564,257.578,22.857,301.465,22.857z
                               M214.192,156.054c6.104,9.904,13.847,18.693,22.847,25.992h-39.872C204.476,174.684,210.3,165.855,214.192,156.054z
                               M142.37,73.248c29.995,0,54.399,24.403,54.399,54.399c0,29.996-24.403,54.4-54.399,54.4c-29.995,0-54.399-24.403-54.399-54.4
                              C87.972,97.651,112.375,73.248,142.37,73.248z M373.05,246.691v65.123v41.79H231.013c-0.021,0-0.041,0-0.062,0h-0.302
                              c-0.013,0-0.026,0-0.039,0H88.566v-51.879v-44.944v-51.879H373.05V246.691z M463.796,341.529l-67.889-36.542v-51.468
                              l67.889-36.542V341.529z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M142.37,92.931c-19.143,0-34.716,15.574-34.716,34.716c0,19.143,15.574,34.716,34.716,34.716
                              c19.143,0,34.716-15.574,34.716-34.716C177.087,108.505,161.513,92.931,142.37,92.931z M142.37,141.791
                              c-7.8,0-14.145-6.345-14.145-14.145c0-7.8,6.345-14.145,14.145-14.145c7.8,0,14.145,6.345,14.145,14.145
                              C156.515,135.446,150.169,141.791,142.37,141.791z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M301.465,52.595c-27.491,0-49.856,22.366-49.856,49.857c0,27.49,22.365,49.856,49.856,49.856
                              c27.491,0,49.856-22.366,49.856-49.856C351.321,74.961,328.957,52.595,301.465,52.595z M301.465,129.451
                              c-14.887,0-26.999-12.112-26.999-26.999c0-14.887,12.112-27,26.999-27s26.999,12.112,26.999,27S316.352,129.451,301.465,129.451z"
                              />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M264.593,238.137h-124.26c-5.997,0-10.857,4.861-10.857,10.857v60.519c0,5.997,4.861,10.857,10.857,10.857h124.26
                              c5.997,0,10.857-4.861,10.857-10.857v-60.519C275.45,242.999,270.589,238.137,264.593,238.137z M253.735,298.656H151.19v-38.804
                              h102.546V298.656z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <circle cx="324.536" cy="260.422" r="11.429"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <circle cx="324.536" cy="298.079" r="11.429"/>
                          </g>
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

                    </div>
                    <h4>Movie/Film</h4>
                  </a>
              </li>
              <li className="SearchIntendedMedium-item" id="intended2" onClick={this.handleMaterialActive2}>
                  <a>
                    <div className="icon mia">
                      <svg className="webIcon" style={{width: 43, height: 62}} height="480pt" viewBox="0 -16 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m448 272h-416v-240h416zm-400-16h384v-208h-384zm0 0"/><path d="m120 296h312v16h-312zm0 0"/><path d="m96 288h16v32h-16zm0 0"/><path d="m48 296h40v16h-40zm0 0"/><path d="m184 228.945312v-153.890624l153.886719 76.945312zm16-128v102.109376l102.113281-51.054688zm0 0"/><path d="m456 0h-432c-13.253906 0-24 10.746094-24 24v304c0 13.253906 10.746094 24 24 24h144v48h-80v48h304v-48h-80v-48h144c13.253906 0 24-10.746094 24-24v-304c0-13.253906-10.746094-24-24-24zm-80 416v16h-272v-16zm-80-16h-112v-48h112zm168-72c0 4.417969-3.582031 8-8 8h-432c-4.417969 0-8-3.582031-8-8v-304c0-4.417969 3.582031-8 8-8h432c4.417969 0 8 3.582031 8 8zm0 0"/></svg>
                    </div>
                    <h4>Web</h4>
                  </a>
              </li>
              <li className="SearchIntendedMedium-item" id="intended3" onClick={this.handleMaterialActive3}>
                  <a>
                    <div className="icon mia">
                      <svg className="televisionIcon" style={{width: 45, height: 62}} version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 512 512">
                        <g>
                          <g>
                            <g>
                              <path d="M138.667,170.667c-5.888,0-10.667,4.779-10.667,10.667v32H85.333v-32c0-5.888-4.779-10.667-10.667-10.667
                                S64,175.445,64,181.333v85.333c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-32H128v32
                                c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-85.333C149.333,175.445,144.555,170.667,138.667,170.667z"/>
                              <path d="M224,170.667h-42.667c-5.888,0-10.667,4.779-10.667,10.667v85.333c0,5.888,4.779,10.667,10.667,10.667H224
                                c17.643,0,32-14.357,32-32v-42.667C256,185.024,241.643,170.667,224,170.667z M234.667,245.333
                                c0,5.888-4.779,10.667-10.667,10.667h-32v-64h32c5.888,0,10.667,4.779,10.667,10.667V245.333z"/>
                              <path d="M480,42.667H32c-17.643,0-32,14.357-32,32v298.667c0,17.643,14.357,32,32,32h181.333v22.976l-119.083,19.84
                                c-5.803,0.96-9.728,6.464-8.768,12.267c0.875,5.227,5.397,8.917,10.517,8.917c0.576,0,1.152-0.043,1.749-0.149L224.853,448
                                h62.272l127.104,21.184c0.597,0.107,1.195,0.149,1.771,0.149c5.141,0,9.664-3.691,10.496-8.917
                                c0.981-5.803-2.965-11.307-8.768-12.267l-119.061-19.84v-22.976H480c17.643,0,32-14.357,32-32V74.667
                                C512,57.024,497.643,42.667,480,42.667z M277.333,426.667h-42.667v-21.333h42.667V426.667z M490.667,373.333
                                c0,5.888-4.779,10.667-10.667,10.667H32c-5.888,0-10.667-4.779-10.667-10.667V74.667C21.333,68.779,26.112,64,32,64h448
                                c5.888,0,10.667,4.779,10.667,10.667V373.333z"/>
                              <path d="M341.333,170.667h-64c-5.888,0-10.667,4.779-10.667,10.667S271.445,192,277.333,192h21.333v74.667
                                c0,5.888,4.779,10.667,10.667,10.667S320,272.555,320,266.667V192h21.333c5.888,0,10.667-4.779,10.667-10.667
                                S347.221,170.667,341.333,170.667z"/>
                              <path d="M441.088,171.349c-5.547-2.069-11.669,0.704-13.739,6.229l-22.016,58.709l-22.016-58.709
                                c-2.069-5.504-8.213-8.277-13.739-6.229c-5.504,2.069-8.299,8.213-6.229,13.739l32,85.333c1.557,4.16,5.547,6.912,9.984,6.912
                                c4.437,0,8.427-2.752,9.984-6.912l32-85.333C449.387,179.563,446.592,173.419,441.088,171.349z"/>
                            </g>
                          </g>
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
                    </div>
                    <h4>Television</h4>
                  </a>
              </li>
              <li className="SearchIntendedMedium-item" id="intended4" onClick={this.handleMaterialActive4}>
                  <a>
                    <div className="icon mia">
                      <svg className="stageIcon" style={{width: 45, height: 62}} version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 512 512">
                        <g>
                          <g>
                            <path d="M459.5,422h-35.75c0-24.813-23.551-45-52.5-45h-54c-28.949,0-52.5,20.187-52.5,45h-17.5c0-24.813-23.551-45-52.5-45h-54
                              c-28.949,0-52.5,20.187-52.5,45H52.5C23.551,422,0,442.187,0,467v37.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V467
                              c0-16.542,16.822-30,37.5-30h54c20.678,0,37.5,13.458,37.5,30v37.5c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V467
                              c0-24.813-23.551-45-52.5-45h-3.25c0-16.542,16.822-30,37.5-30h54c20.678,0,37.5,13.458,37.5,30H229
                              c-28.949,0-52.5,20.187-52.5,45v37.5c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V467c0-16.542,16.822-30,37.5-30h54
                              c20.678,0,37.5,13.458,37.5,30v37.5c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V467c0-24.813-23.551-45-52.5-45h-3.25
                              c0-16.542,16.822-30,37.5-30h54c20.678,0,37.5,13.458,37.5,30h-3.25c-28.949,0-52.5,20.187-52.5,45v37.5
                              c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V467c0-16.542,16.822-30,37.5-30h54c20.678,0,37.5,13.458,37.5,30v37.5
                              c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V467C512,442.187,488.449,422,459.5,422z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M504.5,0H7.5C3.358,0,0,3.358,0,7.5v347c0,4.142,3.358,7.5,7.5,7.5c13.521,0,20.806-4.857,26.66-8.76
                              c5.23-3.486,9.361-6.24,18.34-6.24s13.11,2.754,18.34,6.24c5.854,3.903,13.139,8.76,26.66,8.76c4.142,0,7.5-3.358,7.5-7.5V332h302
                              v22.5c0,4.142,3.358,7.5,7.5,7.5c13.521,0,20.806-4.857,26.66-8.76c5.23-3.486,9.361-6.24,18.34-6.24s13.11,2.754,18.34,6.24
                              c5.854,3.903,13.139,8.76,26.66,8.76c4.142,0,7.5-3.358,7.5-7.5V7.5C512,3.358,508.642,0,504.5,0z M353.214,15h143.429
                              c-3.804,41.987-39.182,75-82.144,75c-29.087,0-55.842-15.252-70.739-40.046C348.963,39.244,352.263,27.446,353.214,15z
                               M338.143,15C334.34,56.987,298.961,90,256,90s-78.34-33.013-82.144-75H338.143z M158.785,15
                              c0.952,12.446,4.252,24.244,9.454,34.954C153.342,74.748,126.587,90,97.5,90c-42.961,0-78.34-33.013-82.144-75H158.785z
                               M497,346.178c-4.316-1.069-7.331-3.079-10.84-5.418c-5.854-3.903-13.139-8.76-26.66-8.76s-20.806,4.857-26.66,8.76
                              c-3.509,2.339-6.523,4.349-10.84,5.418V127.5c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5V317H105V127.5
                              c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v218.678c-4.316-1.069-7.331-3.079-10.84-5.418
                              C73.306,336.857,66.021,332,52.5,332s-20.806,4.857-26.66,8.76c-3.509,2.339-6.523,4.349-10.84,5.418V59.403
                              C32.284,86.777,62.802,105,97.5,105c31.721,0,61.094-15.348,79.273-40.738C194.485,88.913,223.398,105,256,105
                              s61.515-16.087,79.227-40.738C353.406,89.652,382.779,105,414.5,105c34.698,0,65.216-18.223,82.5-45.597V346.178z"/>
                          </g>
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
                    </div>
                    <h4>Stage-Theatre</h4>
                  </a>
              </li>
              <li className="SearchIntendedMedium-item" id="intended5" onClick={this.handleMaterialActive5}>
                  <a>
                    <div className="icon mia">
                      <svg className="literaryIcon" style={{width: 45, height: 62}} height="480pt" viewBox="0 0 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
                        <path d="m40 304h168v8c0 13.253906 10.746094 24 24 24v-16c-4.417969 0-8-3.582031-8-8v-280h16v232h16v-248h160v240h16v-248c0-4.417969-3.582031-8-8-8h-176c-4.417969 0-8 3.582031-8 8v8h-16v-8c0-4.417969-3.582031-8-8-8h-176c-4.417969 0-8 3.582031-8 8v288c0 4.417969 3.582031 8 8 8zm8-288h160v272h-160zm0 0"/><path d="m192 312h-176v-287.769531h-16v295.769531c0 4.417969 3.582031 8 8 8h184zm0 0"/><path d="m64 48h16v16h-16zm0 0"/><path d="m96 48h96v16h-96zm0 0"/><path d="m64 96h128v16h-128zm0 0"/><path d="m64 144h128v16h-128zm0 0"/><path d="m64 192h128v16h-128zm0 0"/><path d="m448 24.230469h16v239.769531h-16zm0 0"/><path d="m336 48h64v16h-64zm0 0"/><path d="m272 48h48v16h-48zm0 0"/><path d="m272 96h128v16h-128zm0 0"/><path d="m272 144h128v16h-128zm0 0"/><path d="m64 240h128v16h-128zm0 0"/><path d="m424 272h-56v-64c0-17.671875-14.328125-32-32-32s-32 14.328125-32 32v93.785156l-9.28125-11.058594c-7.144531-9.367187-18.859375-14.054687-30.496094-12.195312-11.632812 1.859375-21.304687 9.960938-25.175781 21.09375-3.867187 11.128906-1.308594 23.484375 6.664063 32.160156l60.152343 71.75c3.363281 11.191406 11.449219 20.347656 22.136719 25.074219v43.390625c0 4.417969 3.582031 8 8 8h112c4.417969 0 8-3.582031 8-8v-43.390625c14.558594-6.355469 23.980469-20.722656 24-36.609375v-64c-.035156-30.914062-25.085938-55.964844-56-56zm-169.734375 37.839844c.363281-4.222656 2.40625-8.125 5.671875-10.832032 6.828125-5.4375 16.722656-4.566406 22.503906 1.976563l21.558594 25.6875v49.726563l-46.039062-54.910157c-2.742188-3.230469-4.074219-7.425781-3.695313-11.648437zm185.734375 154.160156h-96v-32h96zm24-72c0 13.253906-10.746094 24-24 24h-96c-13.253906 0-24-10.746094-24-24v-184c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v104h16v-24h24v24h16v-24h16c2.6875-.003906 5.367188.265625 8 .800781v31.199219h16v-23.792969c10.035156 7.492188 15.964844 19.269531 16 31.792969zm0 0"/><path d="m176 400h16v16h-16zm0 0"/><path d="m208 400h16v16h-16zm0 0"/><path d="m240 400h16v16h-16zm0 0"/><path d="m120 416h40v-16h-40v-40h-16v40h-32v-56h-16v64c0 4.417969 3.582031 8 8 8h40v40c0 4.417969 3.582031 8 8 8h128v-16h-120zm0 0"/><path d="m256 448h16v16h-16zm0 0"/>
                        <path d="m288 448h16v16h-16zm0 0"/>
                      </svg>
                    </div>
                    <h4>Literary</h4>
                  </a>
              </li>
              <li className="SearchIntendedMedium-item" id="intended6" onClick={this.handleMaterialActive6}>
                  <a>
                    <div className="icon mia">
                      <svg version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 368 368" >
                      <g>
                        <g>
                          <path d="M184,0C82.536,0,0,82.544,0,184s82.536,184,184,184s184-82.544,184-184S285.464,0,184,0z M104.424,216h32.296
                            c3.824,22.664,23.536,40,47.28,40s43.456-17.336,47.28-40h32.32c-4.024,40.368-38.184,72-79.592,72S108.448,256.368,104.424,216z
                             M152,208v-96c0-17.648,14.352-32,32-32s32,14.352,32,32v96c0,17.648-14.352,32-32,32S152,225.648,152,208z M192,351.592v-48
                            c49.2-4.088,88-45.352,88-95.592v-40c0-4.416-3.576-8-8-8s-8,3.584-8,8v32h-32v-88c0-26.472-21.528-48-48-48s-48,21.528-48,48v88
                            h-31.992v-32c0-4.416-3.576-8-8-8s-8,3.584-8,8v39.96c0,0.016-0.008,0.024-0.008,0.04s0.008,0.032,0.008,0.048
                            c0.024,50.216,38.816,91.464,87.992,95.544v48C87.096,347.376,16,273.936,16,184C16,91.36,91.368,16,184,16s168,75.36,168,168
                            C352,273.936,280.904,347.376,192,351.592z"/>
                        </g>
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

                    </div>
                    <h4>Radio-Podcast</h4>
                  </a>
              </li>
          </ul>

          <span className="clearIntended" id="clearIntended" onClick={this.handleClear}><i>&#x2715; </i> Clear selection </span>
        </div>

        <style>{`
            .titleSearchMenu {
              cursor: pointer;
            }

            .titleSearchMenu:hover .searchMaterialsMenu,
            .titleSearchMenu.active .searchMaterialsMenu{
              transform: rotate(180deg);
            }
            .SearchIntendedMedium {
              background: white;
              box-sizing: border-box;
              font-family: sans-serif;
              border-radius: 5px;
              margin-bottom: 10px;
              position: relative;
            }

            .searchIntendedMenu {
              position: absolute;
              top: 23px;
              right: 20px;
              cursor: pointer;
            }

            .searchIntendedMenu img {
              width: 15px;
            }

            .SearchIntendedMedium-container {
              display: none;
              text-align: center;
            }

            .SearchIntendedMedium-container.active {
              display: block;
            }

            .SearchIntendedMedium-items {
              justify-content: space-evenly;
              align-items: center;
              flex-wrap: wrap;
              display: flex;
              text-align: center;
              cursor: pointer;
            }

            .SearchIntendedMedium-item a {
              text-decoration: none;
            }

            .SearchIntendedMedium-item {
              margin: 10px 10px 20px 10px;
            }

            .SearchIntendedMedium-item:hover h4:before,
            .SearchIntendedMedium-item.active h4:before{
              width: 100%;
            }

            .SearchIntendedMedium-item:hover .icon,
            .SearchIntendedMedium-item.active .icon{
              border: 2px solid #ffa603;
              background: #1c2d4c;
            }

            .SearchIntendedMedium-item:hover svg,
            .SearchIntendedMedium-item.active svg{
              fill: #ffa603;
            }


            .SearchIntendedMedium-item h4 {
              margin-top: 10px;
              color: #1c2d4c;
              border-bottom: 2px solid transparent;
              transition: .25s linear;
              position: relative;
              display: inline-block;
            }

            .SearchIntendedMedium-item h4:before {
              content: "";
              position: absolute;
              bottom: -5px;
              left: 0;
              height: 2px;
              width: 0;
              background: #1c2d4c;
              transition: .15s linear;
            }

            .SearchIntendedMedium-item svg{
              fill: #1c2d4c;
              margin: 0 auto;
              width: 50px;
              height: 60px;
              background: transparent;
              transition: .25s linear;
            }

            .icon {
              width: 70px;
              height: 65px;
              background: transparent;
              padding-top: 5px;
              border-radius: 50%;
              transition: .25s linear;
              border: 2px solid #1c2d4c;
              margin: auto;
            }

            .SearchIntendedMedium-item:hover svg,
            .SearchIntendedMedium-item.active svg{
              fill: #ffa603;
            }

            .SearchIntendedMedium-item path,
            .SearchIntendedMedium-item circle{
              stroke-dasharray: 300, 0, 3000;
            }
  
            .SearchIntendedMedium-item:hover svg, 
            .SearchIntendedMedium-item.active svg {
              fill: #ffa603;
            }

            .SearchIntendedMedium-item:hover path,
            .SearchIntendedMedium-item.active path,
            .SearchIntendedMedium-item:hover circle,
            .SearchIntendedMedium-item.active circle{
              animation: twitter 2s;
            }

            .clearIntended {
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

            .clearIntended:hover {
              border-radius: 4px;
              color: #1c2d4c;
              border: 1px solid #1c2d4c;
            }

            .clearIntended.active {
              display: inline-block;
            }

            @media screen and (max-width: 767px) {
              
              .SearchIntendedMedium-item svg {
                width: 40px;
                height: 50px;
              }

              .SearchIntendedMedium-items .webIcon {
                width: 38px !important;
                height: 52px !important;
              }

              .SearchIntendedMedium-items .televisionIcon {
                width: 38px !important;
                height: 52px !important;
              }

              .SearchIntendedMedium-items .stageIcon {
                width: 38px !important;
                height: 52px !important;
              }

              .SearchIntendedMedium-items .literaryIcon {
                width: 38px !important;
                height: 52px !important;
              }

              .SearchIntendedMedium-item h4 {
                font-size: 12px;
              }
          }
          `}</style>

      </div>
    );
  }
}

export default SearchIntendedMedium;
