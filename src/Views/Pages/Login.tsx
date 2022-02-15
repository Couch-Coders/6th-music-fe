// import React from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from '@firebase/auth';
import { useState } from 'react';
// import { GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth';
import { app } from '../../Server/FirebaseConfig';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { PageContentWrapper } from '../Layout/Layout.style';
import SignUp from '../Components/Register/SignUp';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const hours = new Date().getHours();
  const muninutes = new Date().getMinutes();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const getResult = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(`현재시각은 ${hours}:${muninutes}, 현재token은`, result);
  };

  // signInWithEmailAndPassword(auth, email, password)
  //   .then((response) => {
  //     navigate('/');
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log('에러가 발생했습니다', error);
  //   });

  return (
    <PageContentWrapper>
      <h1>Login</h1>
      <hr />
      <div className="">
        <p>Login 페이지 입니다</p>
        <GoogleLoginButton onClick={getResult} />
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <SignUp />
        </div>
      </Container>
    </PageContentWrapper>
  );
}

export default Login;
