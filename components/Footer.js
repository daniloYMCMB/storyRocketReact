import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
		};
	}

	render () {

		return 	<footer className="footer">
					<div className="container">
						footer
					</div>

					<style>{`
						.footer {
							background: #E43776;
							padding: 10px;
							color: white;
						}
					`}</style>
				</footer>
	}
}

export default Footer;