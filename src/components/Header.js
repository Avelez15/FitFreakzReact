import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FitFreakzLogo from '../app/assets/img/FitFreakzLogo.jpg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyle = {
    backgroundColor: '#006699',
    backgroundImage: 'linear-gradient(to top, #B82E1F, #000000, white)',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'white',
  }


  return (
    <Navbar dark color='danger' sticky='top' expand='md' style={headerStyle}>
      <NavbarBrand className='ms-5' href='/'>
        <img src={FitFreakzLogo} alt='FitFreakz logo' className='float-start' />
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/directory'>
              <i className='fa fa-list fa-lg' /> Directory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/about'>
              <i className='fa fa-info fa-lg' /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-address-card fa-lg' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};


export default Header;