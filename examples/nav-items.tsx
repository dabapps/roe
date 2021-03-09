import * as React from 'react';

import { Nav, NavItem } from '../src/ts';

const NavItems = ({
  className,
}: {
  className?: string;
}): React.ReactElement => (
  <Nav className={className}>
    <NavItem active>
      <a href="#">One</a>
    </NavItem>
    <NavItem>
      <a href="#">Two</a>
    </NavItem>
    <NavItem>
      <a href="#">Three</a>
    </NavItem>
    <NavItem>
      <a href="#">Four</a>
    </NavItem>
    <NavItem>
      <a href="#">Five</a>
    </NavItem>
    <NavItem className="button hollow">
      <a href="#">Logout</a>
    </NavItem>
  </Nav>
);

export default NavItems;
