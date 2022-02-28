import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { app } from '../../Server/FirebaseConfig';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';
import {
  LoginContent,
  LoginTitle,
  LoginBtn,
  LoginWrapper,
  LoginImg,
  LoginActions,
} from '../Assets/Styles/Login.style';
import { Img, ImgWrapper } from '../Components/Picture.style';
import { LogIn } from '../../Core/Config/AssetPath';

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const getResult = async () => {
    await signInWithPopup(auth, provider);
    navigate('/');
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
            반갑습니다.
            <br />
            Codingyo에 오신 것을 환영합니다
          </LoginTitle>
          <LoginBtn>
            <GoogleLoginButton onClick={getResult} />
          </LoginBtn>
        </LoginActions>
      </LoginContent>
    </LoginWrapper>
  );
}

export default Login;
