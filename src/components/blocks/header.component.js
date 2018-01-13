const React = require('react');
const PropTypes = require('prop-types');

export class Header extends React.Component {
  render() {
      return (
          <header>
              <h1>{this.props.title}</h1>
          </header>
      );
  }
}

Header.propTypes = {
  title: PropTypes.string
}
