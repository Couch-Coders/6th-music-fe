// import React from "react";

import { GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth';
import { app } from '../../Server/FirebaseConfig';
import { GoogleLoginButton } from 'react-social-login-buttons';

import { PageContentWrapper } from '../Layout/Layout.style';

function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const getResult = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };
  return (
    <PageContentWrapper>
      <h1>Login</h1>
      <hr />
      <div className="">
        <p>Login 페이지 입니다</p>
        <GoogleLoginButton onClick={getResult} />
      </div>
    </PageContentWrapper>
  );
}

export default Login;
