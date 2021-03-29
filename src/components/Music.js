import React from 'react';
import {useWindowSize} from "../hooks/useWindowSize";

function Music() {
	const {width} = useWindowSize()
	return (
		<div style={{display: 'flex', flexDirection: 'column',}}>
			<iframe
				src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A2VvmvtQEw4M5CzZyXQnrEn"
				width="100%"
				height="500"
				frameBorder="0"
				allowTransparency="true"
				allow="encrypted-media"
				style={{marginTop:10, maxWidth: 500}}
			/>
		</div>
	);
};

export default Music;
