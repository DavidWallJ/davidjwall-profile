import React, { Component } from 'react';
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
			<FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
		];
		return (
			<div style={this.props.textAlignObject}>
				<RaisedButton
					onClick={this.handleOpen}
					labelStyle={{ borderRadius: 50 }}
					style={{ boxShadow: 'none' }}
				>
					<i className="fa fa-info" aria-hidden="true" />
				</RaisedButton>
				<Dialog
					title={this.props.title}
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					{this.props.description}
				</Dialog>
			</div>
		);
	}
}

export default InfoModal;
