import React from 'react';
import Link from 'next/link'

class PopUpStory extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
		};
	}

	handleMenuHamburguesa = (e) => {
		e.preventDefault()

		const headerHamburguesa = document.getElementById('headerMenu-hamburguesa')
		const headerMenuMmobile = document.getElementById('headerMenu-mobile')

		headerHamburguesa.classList.toggle('active')
		headerMenuMmobile.classList.toggle('active')
	}

	render () {

		return 	<div className="PopUpStory">

					<div className="box">
						<a className="button" href="#popup1">Let me Pop up</a>
					</div>

					<div id="popup1" className="overlay">
						<div className="popup">
							<h2>Título de Pop up</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore explicabo aliquam, quae voluptatem culpa? Magni cumque nostrum maiores saepe numquam repellendus architecto illum praesentium, reiciendis veritatis incidunt ipsa, impedit at.
							</p>
							<a className="close" href="#">&times;</a>
							<form action="">
								<input type="email" placeholder="email"/>
								<button>Enviar</button>
							</form>
						</div>
					</div>

					<style jsx>{`
						.PopUpStory .box {
						}

						.PopUpStory .button {
						  font-size: 16px;
						  padding: 10px;
						  border: 2px solid #06D85F;
						  cursor: pointer;
						  transition: all 0.3s ease-out;
						  color: red;
						}
						.PopUpStory .button:hover {
						  background: #06D85F;
						}

						.PopUpStory .overlay {
						  position: fixed;
						  top: 0;
						  bottom: 0;
						  left: 0;
						  right: 0;
						  background: rgba(0, 0, 0, 0.7);
						  transition: opacity 500ms;
						  visibility: hidden;
						  opacity: 0;
						}
						.PopUpStory .overlay:target {
						  visibility: visible;
						  opacity: 1;
						}

						.PopUpStory .popup {
						  margin: 23vh auto;
						  padding: 20px;
						  background: #fff;
						  border-radius: 5px;
						  width: 50vw;
						  height: 50vh;
						  position: relative;
						  transition: all .25s ease-in-out;
						  color: red;
						}

						.PopUpStory .popup h2 {
						  margin-top: 0;
						  color: #333;
						  font-family: Tahoma, Arial, sans-serif;
						}
						.PopUpStory .popup .close {
						  position: absolute;
						  top: 20px;
						  right: 30px;
						  transition: all 200ms;
						  font-size: 30px;
						  font-weight: bold;
						  text-decoration: none;
						  color: #333;
						}
						.PopUpStory .popup .close:hover {
						  color: #06D85F;
						}
						.PopUpStory .popup .content {
						  max-height: 30%;
						  overflow: auto;
						  color: red;
						}

						@media screen and (max-width: 700px){
						  .PopUpStory .box{
						    width: 70%;
						  }
						  .PopUpStory .popup{
						    width: 70%;
						  }
						}
					`}</style>
				</div>
	}
}

export default PopUpStory;