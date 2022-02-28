import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { app } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

interface UserCxt {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = React.createContext<UserCxt | null>(null);
export const defaultHeaders: any = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const UseAuth = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('2. UseAuth.tsx파일이 호출됨, firebaseUser', firebaseUser);
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          defaultHeaders.Authorization = `Bearer ${token}`;

          const res = await fetch('/users/me', {
            method: 'GET',
            headers: defaultHeaders,
          });

          if (res.status === 200) {
            console.log('서버 결과 200 입니다');
            const user = await res.json();
            setUser(user);
            navigate('/');
            console.log('실제유저가 등록되어 홈 으로 이동합니다');
          }

          if (res.status === 404) {
            console.log('서버결과 404 입니다, 유저를 등록해야 합니다');
            const res = await fetch('/users', {
              method: 'POST',
              headers: defaultHeaders,
            });
            const user = await res.json();
            setUser(user);
            console.log('실제유저가 등록되어 홈 으로 이동합니다');
          }

          if (res.status === 500) {
            console.log('status 500 입니다');
          }

          // console.log(`현재시각은 ${hours}:${muninutes}, 현재token은`, token);
          // console.log('defaultHeaders', defaultHeaders);
          console.log(
            '3.UseAuth.tsx가 호출됨, res = await fetch를 거친 후의 res',
            res
          );
          console.log('4.로그인 버튼을 누르면, 이 주석이 보인다.');
          setUser(firebaseUser);
        } catch (error) {
          console.log('At UseAuth.tsx, Error is found', error);
        }
      } else {
        delete defaultHeaders.Authorizations;
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UseAuth;
