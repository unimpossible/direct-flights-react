import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f6eb.png"
          width="32"
          height="32"
          alt=""
        />
        Direct Flights Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f6ec.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
export default Header;
