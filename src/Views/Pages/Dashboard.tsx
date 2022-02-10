import { PageContentWrapper } from '../Layout/Layout.style';
import useAuth from '../../Server/useAuth';

function Dashboard() {
  const { user } = useAuth();
  return (
    <PageContentWrapper>
      <h1>Dashboard 페이지 입니다</h1>
      <p>Dashboard 내용</p>
      {user ? user.displayName : <p>Not Loged In</p>}
    </PageContentWrapper>
  );
}

export default Dashboard;
