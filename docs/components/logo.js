import React from 'react';
import Styled from 'rsg-components/Styled';

const styles = ({fontFamily}) => ({
	image: {
		fontFamily: fontFamily.base,
		width: 63,
		height: 24,
		display: 'block'
	}
});

const Logo = ({classes}) => React.createElement(
	'a',
	{
		href: '#'
	},
	React.createElement(
		'img',
		{
			src: 'images/roe-logo-small.png',
			alt: 'Roe Logo',
			className: classes.image
		}
	)
);

export default Styled(styles)(Logo);
