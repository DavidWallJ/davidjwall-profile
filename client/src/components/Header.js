import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
	onNaviClick() {
		let navList = document.getElementsByClassName('navigation__list')[0];
		if (navList) {
			const style = window.getComputedStyle(navList),
				pointerIsAll = style.getPropertyValue('pointer-events') === 'all';
		
			pointerIsAll ? navList.style.pointerEvents = 'none' : navList.style.pointerEvents = 'all';
		}
	}

	render() {
		const iconFields = [
			{ icon: 'tv', component: 'frontend' },
			{ icon: 'server', component: 'backend' },
			{ icon: 'heart', component: 'withCare' },
			{ icon: 'code', component: 'projects' },
			{ icon: 'graduation-cap', component: 'education' },
			{ icon: 'user', component: 'contact' }
		];

		// const rightIcons = (
			// <div className="heading">
			// 	{iconFields.map((icon, i) => {
			// 		return (
			// 			<IconButton key={i}>
			// 				<FontIcon
			// 					className="material-icons nav-button"
			// 					onClick={() => this.props.scrollCallback(icon.component)}
			// 				>
			// 					{icon.icon}
			// 				</FontIcon>
			// 			</IconButton>
			// 		);
			// 	})}
			// </div>
		// );
		// return <AppBar showMenuIconButton={false} />;
		//
		return (
			// <div className="heading">
			// 	{iconFields.map((icon, i) => {
			// 		return (
			// 			<div 
			// 				key={i} className="nav-button"
			// 				onClick={() => this.props.scrollCallback(icon.component)}
			// 			>
			// 				<FontAwesome
			// 					size="2x"
			// 					name={icon.icon}
			// 					style={{ color: 'white' }}
			// 				/>
			// 			</div>
			// 		);
			// 	})}
			// </div>
			<section className="navigation">
				<input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

					<label htmlFor="navi-toggle" className="navigation__button">
					<span className="navigation__icon" onClick={this.onNaviClick}>&nbsp;</span>
					</label>

					<div className="navigation__background">&nbsp;</div>

					<nav className="navigation__nav">
						<ul className="navigation__list">
							<li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
							<li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benfits</a></li>
							<li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
							<li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
							<li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
						</ul>
					</nav>
        	</section>
		)
	}
}

export default Header;
