import React from 'react';
import styles from '../componentsStyles';
import FontIcon from 'material-ui/FontIcon';

const ContactPanel = props => {
	const { iconName, contactData, color, href } = props;
	return (
		<div className="col s12 m4 center-align">
			<a href={href}>
				<FontIcon
					style={{
						fontSize: 70,
						color: color
					}}
					className="material-icons"
				>
					{iconName}
				</FontIcon>
				<p
					style={{ ...styles.contactIconData, color: color, fontSize: '1.3em' }}
				>
					{contactData}
				</p>
			</a>
		</div>
	);
};

export default ContactPanel;
