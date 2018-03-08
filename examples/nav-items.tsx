import * as React from 'react';
import {
  Nav,
  NavItem,
} from '../src/ts/';

const NavItems = ({className}: {className?: string}) => (
  <Nav className={className}>
    <NavItem>
      <a href="#">
        One
      </a>
    </NavItem>
    <NavItem className="button">
      <a href="#">
        Two
      </a>
    </NavItem>
    <NavItem className="button link secondary">
      <a href="#">
        Three
      </a>
    </NavItem>
    <NavItem className="button pill tertiary">
      <a href="#">
        Four
      </a>
    </NavItem>
    <NavItem className="button link pill">
      <a href="#">
        Five
      </a>
    </NavItem>
    <NavItem className="button hollow">
      <a href="#">
        Six
      </a>
    </NavItem>
    <NavItem className="button pill link hollow primary">
      <a href="#">
        Seven
      </a>
    </NavItem>
  </Nav>
);

export default NavItems;
