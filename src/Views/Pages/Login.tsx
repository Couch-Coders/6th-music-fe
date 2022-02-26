import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { app } from '../../Server/FirebaseConfig';
import { GoogleLoginButton } from 'react-social-login-buttons';
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
import UseAuth from '../../Server/UseAuth';

function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const getResult = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log('Login.tsx 페이지 입니다, result', result);
    console.log('Login.tsx에 있는 로그인 버튼에 해당하는 함수가 실행됐습니다.');
  };

  const LoginStyle = {
    ImgWidth: 542,
  };

  return (
    <UseAuth>
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
    </UseAuth>
  );
}

export default Login;
