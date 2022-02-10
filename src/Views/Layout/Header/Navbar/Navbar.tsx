import { Link } from 'react-router-dom';
import { Nav, NavLi, NavList } from './Navbar.style';

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <Link to="/home">Home</Link>
        </NavLi>
        <NavLi>
          <Link to="/dashboard">dashboard</Link>
        </NavLi>
        <NavLi>
          <Link to="/register">register</Link>
        </NavLi>
        <NavLi>
          <Link to="/detail">detail</Link>
        </NavLi>
      </NavList>
    </Nav>
  );
}

export default Navbar;
