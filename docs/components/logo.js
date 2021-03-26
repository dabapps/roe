/* eslint-disable @typescript-eslint/no-var-requires */

const React = require('react');
const Styled = require('react-styleguidist/lib/client/rsg-components/Styled')
  .default;

function styles(settings) {
  return {
    image: {
      fontFamily: settings.fontFamily.base,
      width: 63,
      height: 24,
      display: 'block',
    },
  };
}

function Logo(props) {
  return React.createElement(
    'a',
    {
      href: '#',
    },
    React.createElement('img', {
      src: 'images/roe-logo-small.png',
      alt: 'Roe Logo',
      className: props.classes.image,
    })
  );
}

module.exports = Styled(styles)(Logo);
