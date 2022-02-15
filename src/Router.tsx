// import { useState, useEffect } from 'react';
// import Test from './Views/Pages/Test';
// import { app } from './Server/FirebaseConfig';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';

import { Routes, Route } from 'react-router-dom';
import Layout from './Views/Layout/Layout';
import Home from './Views/Pages/Home';
import Detail from './Views/Pages/Detail';
import Register from './Views/Pages/Register';
import Login from './Views/Pages/Login';
import Logout from './Views/Pages/Logout';
import Dashboard from './Views/Pages/Dashboard';
import PrivateRoute from './Views/Components/PrivateRoute';
// import { onAuthStateChanged, User } from '@firebase/auth';

const Router = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const navigate = useNavigate();
  // const handleAction = (id: number) => {
  //   const authentication = getAuth();
  //   if (id === 1) {
  //     signInWithEmailAndPassword(authentication, email, password)
  //       .then((response) => {
  //         navigate('/');
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log('에러가 발생했습니다', error);
  //       });
  //   }

  //   if (id === 2) {
  //     createUserWithEmailAndPassword(authentication, email, password)
  //       .then((response) => console.log('response', response))
  //       .catch((error) => {
  //         console.log('에러가 발생했습니다', error);
  //       });
  //     navigate('/');
  //     console.log(id);
  //   }
  // };
  // const auth = getAuth(app);
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       console.log('확인된 유저', user);

  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [auth, user]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        />
        <Route path="/detail" element={<Detail />}>
          <Route path=":itemIdx" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/test"
          element={
            <Test
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        /> */}
        {/* <Route
          path="/tlogin"
          element={
            <Test
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        /> */}
        {/* <Route index /> */}
      </Route>
    </Routes>
  );
};

export default Router;
