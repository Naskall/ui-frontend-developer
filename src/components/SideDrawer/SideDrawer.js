import React from 'react';

import './SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Rosto</a>
        </li>
        <li>
          <a href="/">Cabelo</a>
              </li>
              <li>
          <a href="/">Barba</a>
              </li>
              <li>
          <a href="/">Acessórios</a>
        </li>
              <li>
          <a href="/">Kit e Presentes</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
