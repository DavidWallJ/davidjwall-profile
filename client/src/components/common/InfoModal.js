import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class InfoModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const actions = [
			<FlatButton label="Continue" primary={true} onClick={this.handleClose} />
		];
		const { textColor } = this.props.muiTheme.appBar;
		return (
			<div style={{ display: 'inline-block' }}>
				<RaisedButton
					onClick={this.handleOpen}
					style={{
						boxShadow: 'none',
						color: textColor,
						backgroundColor: 'transparent',
						fontSize: 'initial'
					}}
					secondary={true}
				>
					<i className="fa fa-info" aria-hidden="true" />
				</RaisedButton>
				<Dialog
					title={this.props.title}
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					style={{ fontWeight: 400 }}
				>
					{this.props.description}
				</Dialog>
			</div>
		);
	}
}

export default muiThemeable()(InfoModal);
