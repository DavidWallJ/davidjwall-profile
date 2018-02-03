import React, { Component } from 'react';
import styles from './componentsStyles';
import Slider from 'react-slick';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';

import certificates from './educationData';
import IconFullPanel from './common/IconFullPanel';
import InfoModal from './common/InfoModal';

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
					color: textColor,
					position: 'relative'
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
				<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
					<InfoModal
						title="Front-end, back-end and everything in between."
						description="The certificates displayed in this section represent a portion of the content I've covered on my path to becoming a competent, well rounded full-stack web developer. Web development is an ever changing industry and I look forward to continuing my education as new and better libraries, frameworks, and languages emerge."
						iconName="fa fa-info"
					/>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(Education));
