'use strict';

(function () {

	var React = require('react');

	module.exports = function () {
		return React.createElement(
			'a',
			{
				href: '#'
			},
			React.createElement(
				'img',
				{
					src: 'images/roe-logo-small.png',
					alt: 'Roe Logo'
				}
			)
		);
	};

})();
