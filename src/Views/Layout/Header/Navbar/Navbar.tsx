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
        <NavLi>
          <Link to="/register">등록하기</Link>
        </NavLi>
        <NavLi>
          <Link to="/dashboard">dashboard</Link>
        </NavLi>
        {/* <NavLi>
          <Link to="/test">Login Form</Link>
        </NavLi>
        <NavLi>
          <Link to="/tlogin">Register Form</Link>
        </NavLi> */}
        <NavLi>
          <Link to="/login">로그인 테스트</Link>
        </NavLi>
        {/* <NavLi>
          <Link to="/register">상세페이지</Link>
        </NavLi> */}
        {/* <NavLi>
          <Link to="/invoices">Invoices</Link>
        </NavLi>
        <NavLi>
          <Link to="/expense">Expenses</Link>
        </NavLi> */}
      </NavList>
    </Nav>
  );
}

export default Navbar;
