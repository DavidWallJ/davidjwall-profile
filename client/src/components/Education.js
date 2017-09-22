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
		let settings = {};
		if (window.innerWidth > 599) {
			settings = {
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				className: 'slides'
			};
		} else {
			settings = {
				slidesToShow: 1,
				slidesToScroll: 1,
				className: 'slides'
			};
		}
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

				<div className="col s12" style={{ paddingLeft: 46, paddingRight: 46 }}>
					<Slider {...settings} style={{ padding: '10%' }}>
						{certificates.map((certificate, i) => {
							return (
								<div key={i}>
									<img
										src={certificate.URL}
										alt={certificate.name}
										className="img-responsive"
									/>
									<p
										className="textCenter"
										style={{
											fontSize: '1.1em',
											marginTop: -10
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
