import React from 'react';
import {Button, NavbarBrand,Navbar,NavItem, NavLink,Input} from 'reactstrap'

function Nav() {
  return <div>
    <Navbar color='light' expand="md" light >
    <NavbarBrand href='/'>Chi Hien</NavbarBrand>
    <Nav>
      <div className='navigation-buttons'>
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
      <div className='navigation-links'>
        <NavItem >
            <NavLink href='/'>Home</NavLink>
        </NavItem>
        <NavItem >
            <NavLink href='/explore'>Explore</NavLink>
        </NavItem>
        <NavItem >
            <NavLink href='/library'>Library</NavLink>
        </NavItem>
        </div>
        <div className='right_part'>
            <Input type='search' id='searchInput' name='searchInput'/>
            <img src='../img/avatar.jpg' alt='avatar'/>
        </div>
      </Nav>
      </Navbar>
  </div>;
}

export default Nav;
