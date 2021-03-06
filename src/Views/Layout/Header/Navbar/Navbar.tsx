import { Link } from 'react-router-dom';
import { Nav, NavLi, NavList } from './Navbar.style';
import { useContext } from 'react';
import { UserContext } from '../../../../Server/UseAuth';

function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <Nav>
      <NavList>
        <NavLi>
          <Link to="/">홈</Link>
        </NavLi>
        {!user ? null : (
          <NavLi>
            <Link to="/register">등록하기</Link>
          </NavLi>
        )}
      </NavList>
    </Nav>
  );
}

export default Navbar;
