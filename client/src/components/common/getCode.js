import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Testing extends Component {
	render() {
		return (
			<a href="https://www.google.com" target="_blank">
				<FontAwesome
					name="terminal"
					size="1x"
					style={{
						textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
						display: 'inline-block',
						color: 'white',
						paddingLeft: 36
					}}
				/>
			</a>
		);
	}
}

export default Testing;
