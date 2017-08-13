import './Header.css';
import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="grey darken-1">
				<div className="nav-wrapper">
					<a href="#!" className="left brand-logo">
						David J. Wall
					</a>
					<ul className="right hide-on-small-and-down">
						<li>
							<a href="">
								<i className="material-icons">storage</i>
							</a>
						</li>
						<li>
							<a href="">
								<i className="material-icons">computer</i>
							</a>
						</li>
						<li>
							<a href="">
								<i className="material-icons">favorite_border</i>
							</a>
						</li>
						<li>
							<a href="">
								<i className="material-icons">face</i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
