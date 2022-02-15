import { Link } from 'react-router-dom';
import { Nav, NavLi, NavList } from './Navbar.style';

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <Link to="/">홈</Link>
        </NavLi>
      </NavList>
    </Nav>
  );
}

export default Navbar;
