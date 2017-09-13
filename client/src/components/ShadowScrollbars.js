import css from 'dom-css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

class ShadowScrollbars extends Component {
	constructor(props, ...rest) {
		super(props, ...rest);
		this.state = {
			scrollTop: 0,
			scrollHeight: 0,
			clientHeight: 0
		};
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(values) {
		const { shadowTop, shadowBottom } = this.refs;
		const { scrollTop, scrollHeight, clientHeight } = values;
		const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);
		const bottomScrollTop = scrollHeight - clientHeight;
		const shadowBottomOpacity =
			1 / 20 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));
		css(shadowTop, { opacity: shadowTopOpacity });
		css(shadowBottom, { opacity: shadowBottomOpacity });
	}

	render() {
		const { style, ...props } = this.props;
		const containerStyle = {
			...style,
			position: 'relative',
			backgroundColor: 'rgba(0, 0, 0, 0.05)',
			borderRadius: 9
		};

		return (
			<div style={containerStyle}>
				<Scrollbars ref="scrollbars" onUpdate={this.handleUpdate} {...props} />
				<div ref="shadowTop" />
				<div ref="shadowBottom" />
			</div>
		);
	}
}

ShadowScrollbars.propTypes = {
	style: PropTypes.object
};

export default ShadowScrollbars;
