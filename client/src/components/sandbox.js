<nav className="grey darken-1">
	<div className="nav-wrapper">
		<Link to={'/'} className="left brand-logo">
			David J. Wall
		</Link>
		<ul className="right hide-on-small-and-down">
			<li>
				<a href="">
					<i className="material-icons">storage</i>
				</a>
			</li>
			<li>
				<a href="">
					<i className="material-icons">computer</i>
				</a>
			</li>
			<li>
				<a href="">
					<i className="material-icons">favorite_border</i>
				</a>
			</li>
			<li>
				<a href="">
					<i className="material-icons">face</i>
				</a>
			</li>
		</ul>
	</div>
</nav>;

<a href="#">
	<i className="small material-icons header-icons" color="red">
		storage
	</i>
</a>
<a href="#">
	<i className="small material-icons white-text header-icons">
		computer
	</i>
</a>
<a href="#">
	<i className="small material-icons white-text header-icons">
		favorite_border
	</i>
</a>
<a href="#">
	<i className="small material-icons white-text header-icons">face</i>
</a>

return (
	<div className="row">
		<div className="col s12 m4 offset-m4 center-align">
			<ul className="collection with-header">
				<li className="collection-header">
					<h1>Welcome</h1>
					<p>Please login with...</p>
				</li>
				<li className="collection-item">
					<a href="/auth/linkedin">Linkedin</a>
				</li>
				<li className="collection-item">
					<a href="/auth/google">Google</a>
				</li>
				<li className="collection-item">
					<a href="/auth/facebook">Facebook</a>
				</li>
				<li className="collection-item">Anonymous</li>
			</ul>
		</div>
	</div>
);
