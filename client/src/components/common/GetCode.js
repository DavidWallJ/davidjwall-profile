import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class GetCode extends Component {
	render() {
		return (
			<a href={this.props.codeURL} className="info-block__get-code" target="_blank">
				<FontAwesome
					name="terminal"
					style={{
						textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
						display: 'inline-block',
						color: '#ff4081',
						paddingLeft: 36,
						paddingRight: 34,
						fontSize: 'initial'
					}}
				/>
			</a>
		);
	}
}

export default GetCode;
