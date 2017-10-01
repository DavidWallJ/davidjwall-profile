import React, { Component } from 'react';
import styles from './componentsStyles';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontAwesome from 'react-fontawesome';
import { Card } from 'material-ui/Card';

import InfoModal from './common/InfoModal';
import IconHalfPanel from './common/IconHalfPanel';
import GetCode from './common/GetCode';

class WithCare extends Component {
	render() {
		const { textColor, color } = this.props.muiTheme.appBar;

		return (
			<Card className="row" style={{ ...styles.halfPanelCard }}>
				<div className="col s12" style={{ padding: 0, position: 'relative' }}>
					<IconHalfPanel iconName="favorite" panelTitle="With Care" />
					<div
						className="col s12 m6"
						style={{
							...styles.flexCenterColumn,
							...styles.contentContainer,
							backgroundColor: textColor,
							color: color
						}}
					>
						<h5>In addition to all this... </h5>
						<p>
							I'm experienced with{' '}
							<span className="highlight">testing frameworks </span> like{' '}
							<span className="highlight">Mocha </span> and{' '}
							<span className="highlight">Chai</span>. The integration of which
							help to ensure that your project not only behaves exactly as you
							would like it to now but also in the future.
						</p>
						<p>
							I know my way around{' '}
							<span className="highlight">collaboration</span> and version
							control software like <span className="highlight">Git </span> and{' '}
							<span className="highlight">GitHub </span> which allow for
							efficient and reliable individual or{' '}
							<span className="highlight">team web development</span>.
						</p>
					</div>
					<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
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
						<InfoModal title="Sup With Care" description="Not much." />
					</div>
				</div>
			</Card>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(muiThemeable()(WithCare));
