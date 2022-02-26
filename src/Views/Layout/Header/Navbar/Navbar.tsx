import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLi, NavList } from './Navbar.style';
import UseAuth from '../../../../Server/UseAuth';
import { UserContext } from '../../../../Server/UseAuth';

function Navbar() {
  const { user } = useContext(UserContext);
  console.log('Navbar.tsx에서 확인되는 user', user);

  return (
    <UseAuth>
      <Nav>
        <NavList>
          <NavLi>
            <Link to="/">홈</Link>
          </NavLi>
          {user ? (
            <NavLi>
              <Link to="/register">등록하기</Link>
            </NavLi>
          ) : null}
        </NavList>
      </Nav>
    </UseAuth>
  );
}

export default Navbar;
