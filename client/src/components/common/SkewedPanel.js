import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from '../componentsStyles';
import FontIcon from 'material-ui/FontIcon';

class SkewedPanel extends Component {
	constructor(props) {
		super(props);
		console.log('props', props);
	}

	render() {
		return (
			<div className="story">
				<FontAwesome
					name={this.props.iconName}
					size="5x"
					style={{ color: this.props.iconColor }}
				/>
				<div className="story__text">
					{/* <h3 className="title heading-3">{this.props.title}</h3> */}
					<p>
						{this.props.description}
					</p>
				</div>
			</div>
		)		
	};
};

export default SkewedPanel;
