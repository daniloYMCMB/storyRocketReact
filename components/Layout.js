import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {

    componentDidMount() {
    }

	render () { 
		
		return <div className="Layout" >

					<Head>
						<title>{ this.props.title }</title>

						<meta name="viewport" content="width=device-width, initial-scale=1.0" />

						<link rel="icon" type="image/png" href="/static/img/pd-small.svg" />

					</Head>

					
					{this.props.children}

					
					<style jsx global="true">{`

						html, body, div, span, applet, object, iframe,
						h1, h2, h3, h4, h5, h6, p, blockquote, pre,
						a, abbr, acronym, address, big, cite, code,
						del, dfn, em, img, ins, kbd, q, s, samp,
						small, strike, strong, sub, sup, tt, var,
						b, u, i, center,
						dl, dt, dd, ol, ul, li,
						fieldset, form, label, legend,
						table, caption, tbody, tfoot, thead, tr, th, td,
						article, aside, canvas, details, embed,
						figure, figcaption, footer, header, hgroup,
						main, menu, nav, output, ruby, section, summary,
						time, mark, audio, video {
							margin: 0;
							padding: 0;
							border: 0;
							font-size: 100%;
							font: inherit;
							vertical-align: baseline;
						}
						article, aside, details, figcaption, figure,
						footer, header, hgroup, main, menu, nav, section {
							display: block;
						}
						body {
							line-height: 1;
						}
						ol, ul {
							list-style: none;
						}
						blockquote, q {
							quotes: none;
						}
						blockquote:before, blockquote:after,
						q:before, q:after {
							content: '';
							content: none;
						}
						table {
							border-collapse: collapse;
							border-spacing: 0;
						}
						a {
							text-decoration: none;
							display: inline-block;
						}
						input:focus {
							border: none;
							outline-color: white;
						}
						img {
							max-width: 100%;
							height: auto;
							display: block;
							margin: auto;
						}
						:focus {
							outline: inherit;
						}

						body {
							background: #f3f3f3;
						}
					
							
					`}</style>

				</div>
	}
}