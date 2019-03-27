import React from 'react';
import Link from 'next/link'

class Header extends React.Component {

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

		return 	<header className="header">
					<div className="container">
						header
					</div>

					<style jsx>{`
						.header {
							background: green;
							padding: 10px;
							color: white;
						}

					`}</style>
				</header>
	}
}

export default Header;