import React, { Component } from 'react';
import styles from './componentsStyles';
import Slider from 'react-slick';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';

import certificates from './educationData';
import IconFullPanel from './common/IconFullPanel';
class Education extends Component {
	render() {
		const settings = {
			slidesToShow: 3,
			slidesToScroll: 3
		};
		const { color, textColor } = this.props.muiTheme.appBar;

		return (
			<Card
				className="row"
				style={{
					...styles.fullPanelCard,
					backgroundColor: color,
					color: textColor
				}}
			>
				<IconFullPanel
					iconName="school"
					panelTitle="Education"
					color={textColor}
				/>

				<div className="col s12">
					<Slider {...settings}>
						{certificates.map((certificate, i) => {
							return (
								<div key={i}>
									<img
										src={certificate.URL}
										alt={certificate.name}
										className="img-responsive"
									/>
									<p
										style={{
											textAlign: 'center',
											fontSize: 25,
											fontWeight: 400
										}}
									>
										{certificate.name}
									</p>
								</div>
							);
						})}
					</Slider>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Education));
