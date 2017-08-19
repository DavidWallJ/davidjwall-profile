import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import OptionsFormFirstPage from './OptionsFormFirstPage';
import OptionsFormSecondPage from './OptionsFormSecondPage';
import OptionsFormThirdPage from './OptionsFormThirdPage';

import { reduxForm } from 'redux-form';

class OptionsForm extends Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
			page: 1
		};
	}
	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	render() {
		const { onSubmit } = this.props;
		const { page } = this.state;
		return (
			<div>
				{page === 1 && <OptionsFormFirstPage onSubmit={this.nextPage} />}
				{page === 2 &&
					<OptionsFormSecondPage
						previousPage={this.previousPage}
						onSubmit={this.nextPage}
					/>}
				{page === 3 &&
					<OptionsFormThirdPage
						previousPage={this.previousPage}
						onSubmit={onSubmit}
					/>}
			</div>
		);
	}
}

// OptionsForm.propTypes = {
// 	onSubmit: PropTypes.func.isRequired
// };

export default muiThemeable()(
	reduxForm({
		form: 'optionsForm'
	})(OptionsForm)
);
