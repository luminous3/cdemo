import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.name != this.props.name) return true;
    return false;
  }

  render() {
    return (
     <div className="header-container">
        Welcome, {this.props.contacts.name}
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string
};
