import { Outlet } from 'react-router';
import Logo from './Header/Logo/Logo';
import Navbar from './Header/Navbar/Navbar';
import FunctionsBtn from './Header/Utiles/FunctionBtn';

import {
  Content,
  Header,
  HeaderSection,
  HLeftSection,
  HRightSection,
} from './Layout.style';

function Layout() {
  return (
    <>
      <HeaderSection>
        <Header>
          <Content>
            <HLeftSection>
              <Logo />
              <Navbar />
            </HLeftSection>
            <HRightSection>
              <FunctionsBtn />
            </HRightSection>
          </Content>
        </Header>
      </HeaderSection>
      <main>
        <Content>
          <Outlet />
        </Content>
      </main>
    </>
  );
}

export default Layout;
