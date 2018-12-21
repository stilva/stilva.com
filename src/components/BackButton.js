import React, {memo} from 'react';
import {Link} from '@reach/router';

export default memo(function() {
	return <Link to="/" className="back-button">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="back-button__svg" width="50px" height="50px" >
			<path className="back-button__square" stroke="#000" d="M.5.5h49v49H.5z"/>
			<path className="back-button__arrow" d="M20.7 27.8v-5.4L18 25.1l2.7 2.7z" fill="#fff"/>
			<path className="back-button__line" d="M20 25.1h13.2" fill="none" stroke="#fff" />
		</svg>
	</Link>
});