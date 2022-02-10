// import React from "react";
import { signOut } from '@firebase/auth';
import { PageContentWrapper } from '../Layout/Layout.style';
import { useEffect } from 'react';
import useAuth from '../../Server/useAuth';

function Logout() {
  const { auth } = useAuth();
  useEffect(() => {
    (async () => {
      await signOut(auth);
    })();
  }, [auth]);

  return (
    <PageContentWrapper>
      <h1>LogOut</h1>
      <hr />
      <p>Logout 페이지 입니다</p>
    </PageContentWrapper>
  );
}

export default Logout;
