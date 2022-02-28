import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from '@firebase/auth';
import { app } from '../../Server/FirebaseConfig';
import {
  LoginActions,
  LoginContent,
  LoginImg,
  LoginTitle,
  LoginWrapper,
} from '../Assets/Styles/Login.style';
import { Img, ImgWrapper } from '../Components/Picture.style';
import { LogIn } from '../../Core/Config/AssetPath';
import { LogoutBtn } from '../Components/Button.style';

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

  const LoginStyle = {
    ImgWidth: 542,
  };

  return (
    <LoginWrapper>
      <LoginContent>
        <LoginImg ImgWidth={LoginStyle.ImgWidth}>
          <ImgWrapper>
            <Img src={LogIn.info.src} alt={LogIn.info.alt} />
          </ImgWrapper>
        </LoginImg>
        <LoginActions>
          <LoginTitle>
            로그아웃 <br /> 정말 로그아웃하실건가요?
          </LoginTitle>
          <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
        </LoginActions>
      </LoginContent>
    </LoginWrapper>
  );
}

export default Logout;
