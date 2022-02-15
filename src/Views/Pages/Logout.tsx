import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from '@firebase/auth';
import { PageContentWrapper } from '../Layout/Layout.style';
import { app } from '../../Server/FirebaseConfig';

function Logout() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PageContentWrapper>
      <h1>LogOut</h1>
      <hr />
      <button onClick={handleLogout}>로그아웃버튼임</button>
      <p>Logout 페이지 입니다</p>
    </PageContentWrapper>
  );
}

export default Logout;
