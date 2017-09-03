const iconFields = [
	{ icon: 'important_devices', component: 'frontend' },
	{ icon: 'dns', component: 'backend' },
	{ icon: 'favorite', component: 'withCare' },
	{ icon: 'code', component: 'projects' },
	{ icon: 'face', component: 'contact' }
];
const rightIcons = (
	<div>
		{iconFields.map(function(icon, i) {
			return (
				<a href="#" key={i}>
					<FontIcon
						className="material-icons"
						style={iconStyles}
						onClick={() => this.props.scrollCallback('contact')}
					>
						{icon.icon}
					</FontIcon>
				</a>
			);
		})}
	</div>
);
