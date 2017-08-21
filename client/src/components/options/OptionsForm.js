import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
						// onSubmit={values => console.log(values)}
						onSubmit={values => this.props.saveOptions(values)}
					/>}
			</div>
		);
	}
}

// OptionsForm.propTypes = {
// 	onSubmit: PropTypes.func.isRequired
// };

export default connect(null, actions)(
	muiThemeable()(reduxForm({ form: 'wizard' })(OptionsForm))
);
