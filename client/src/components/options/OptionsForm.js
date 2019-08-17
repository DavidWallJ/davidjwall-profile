import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';
// import OptionsFormFirstPage from './OptionsFormFirstPage';
import OptionsFormSecondPage from './OptionsFormSecondPage';
import OptionsFormThirdPage from './OptionsFormThirdPage';

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
			<div className="container-fluid">
				{/* {page === 1 && <OptionsFormFirstPage onSubmit={this.nextPage} />} */}
				{page === 1 &&
					<OptionsFormSecondPage
						logoutRedirect={this.logoutRedirect}
						previousPage={this.previousPage}
						onSubmit={this.nextPage}
					/>}
				{page === 2 &&
					<OptionsFormThirdPage
						previousPage={this.previousPage}
						onSubmit={values => {
							if (this.props.anonymous.auth !== false) {
								this.props.saveOptions(values);
							} else {
								this.props.setAnonymous({
									auth: true,
									options: []
								});
							}
							this.props.setTheme({ theme: values.theme });
						}}
					/>}
			</div>
		);
	}
}

// OptionsForm.propTypes = {
// 	onSubmit: PropTypes.func.isRequired
// };

function mapStateToProps({ auth, anonymous }) {
	return { auth, anonymous };
}

export default connect(mapStateToProps, actions)(
	reduxForm({ 
		form: 'wizard',
		initialValues: {
			theme: 'theme-light',
			genre: 'silence'
		} 
	})(OptionsForm)
);
