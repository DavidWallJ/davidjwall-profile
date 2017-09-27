async componentDidMount() {
	await this.props.fetchUser();
	const { theme, genre } = this.props.auth.options[0];

	// set background image
	switch (theme) {
		case 'darkTheme':
			currentBackgroundURL =
				'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/caspar-rubin-224229.jpg';
			break;
		default:
			currentBackgroundURL =
				'https://s3-ap-northeast-1.amazonaws.com/davidjwall-profileimages/lightthemebackgroundimage.JPG';
	}

	if (this.props.auth && this.props.auth.options.length > 0) {
		this.props.setTheme({ theme });
		if (genre === 'silence') {
			this.props.setAudio({ genre, status: 'STOPPED' });
		} else if (genre) {
			this.props.setAudio({ genre, status: 'PLAYING' });
		}
	}
}
