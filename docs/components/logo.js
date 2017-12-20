var React = require('react');
var Styled = require('rsg-components/Styled').default;

function styles (style) {
  return {
    image: {
      fontFamily: style.fontFamily.base,
      width: 63,
      height: 24,
      display: 'block'
    }
  };
}

function Logo (props) {
  return React.createElement(
    'a',
    {
      href: '#'
    },
    React.createElement(
      'img',
      {
        src: 'images/roe-logo-small.png',
        alt: 'Roe Logo',
        className: props.classes.image
      }
    )
  );
}

module.exports = Styled(styles)(Logo);
