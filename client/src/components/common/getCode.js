import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class GetCode extends Component {
	render() {
		return (
			<a href={this.props.codeURL} target="_blank">
				<FontAwesome
					name="terminal"
					size="1x"
					style={{
						textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
						display: 'inline-block',
						color: '#ff4081',
						paddingLeft: 36,
						paddingRight: 34
					}}
				/>
			</a>
		);
	}
}

export default GetCode;
