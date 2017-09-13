<List>
	{results.map((result, i) => {
		return (
			<a href={result.link} key={i}>
				{/* <li
          style={{
            color: this.props.textColor,
            fontSize: 25,
            fontWeight: 400
          }}
        >
          {result.name}
        </li> */}
				<ListItem
					primaryText={result.name}
					style={{
						color: this.props.textColor,
						fontSize: 20,
						fontWeight: 400,
						maxHeight: '100%'
					}}
				/>
			</a>
		);
	})}
</List>;
