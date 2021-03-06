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
		// const { textColor } = this.props.muiTheme.appBar;
		return (
			<div style={{ display: 'inline-block' }}>
				<RaisedButton
					onClick={this.handleOpen}
					style={{
						boxShadow: 'none',
						backgroundColor: 'transparent',
						fontSize: 'initial',
						minWidth: '40px'
					}}
					secondary={true}
				>
					<i className={this.props.iconName} aria-hidden="true" />
				</RaisedButton>
				<Dialog
					title={this.props.title}
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					bodyStyle={{ color: this.props.fontColor }}
					bodyClassName='dialog-body'
					actionsContainerClassName='dialog-actions-container'
					contentClassName="dialog-content"
					titleClassName="dialog-title"
				>
					{this.props.description}
				</Dialog>
			</div>
		);
	}
}

export default InfoModal;
