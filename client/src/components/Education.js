import React, { Component } from 'react';
import certificates from './educationData';
import Slider from 'react-slick';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

class Education extends Component {
	render() {
		const settings = {
			slidesToShow: 3,
			slidesToScroll: 3
		};
		const { color, textColor } = this.props.muiTheme.appBar;
		const altColor = this.props.muiTheme.slider.trackColorSelected;
		return (
			<Card
				className="row"
				style={{
					margin: 0,
					minHeight: 500,
					paddingTop: 52,
					backgroundColor: color,
					color: textColor,
					padding: 18
				}}
			>
				<div
					className="col s12"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						color: textColor
					}}
				>
					<FontIcon
						style={{
							fontSize: 120,
							color: textColor
						}}
						className="material-icons"
					>
						school
					</FontIcon>
					<h2>Education</h2>
				</div>
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
