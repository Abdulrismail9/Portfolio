import React, { Component } from 'react';


class Header extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <img alt='' width='150px' src={`/images/Abdul_Ismail.jpg`} />
        <p>Abdul Rahman Ismail</p>
      </div>
    );
  }
}

export default Header;
