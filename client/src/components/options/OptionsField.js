// node with react: fullsatck web development | video: 148
import React from 'react';

export default ({ input }) => {
	return (
		<p>
			<input className="group1" type="radio" id="test1" {...input} />
			<label>Red</label>
		</p>
	);
};
