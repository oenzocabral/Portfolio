import React from 'react';
import NavigationLinks from './Header/NavigationLinks';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <NavigationLinks />
        </header>
      </div>
    </div>
  );
}

export default Header;