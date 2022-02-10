import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { app } from '../Server/FirebaseConfig';
import { useEffect, useRef, useState } from 'react';

const useAuth = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  let mounted = useRef<boolean>(false);
  useEffect(() => {
    mounted.current = true;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        if (mounted.current) setUser(user);
      } else {
        if (mounted.current) setUser(null);
      }
    });
    return () => {
      mounted.current = false;
      unsubscribe();
    };
  }, [auth]);

  return {
    user,
    auth,
  };
};

export default useAuth;
