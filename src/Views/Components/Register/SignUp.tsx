import React, { useRef, useState, useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { app } from '../../../Server/FirebaseConfig';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { UserContext } from '../../../Server/UseAuth';

const SignUp = () => {
  const auth = getAuth(app);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  console.log('emailRef', emailRef.current?.value);
  console.log('passwordRef', passwordRef.current?.value);
  console.log('passwordConfirmRef', passwordConfirmRef.current?.value);
  console.log('error', error);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('패스워드가 일치하지 않습니다');
    }
    try {
      setError('');
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.log(error);
      setError('계정 만들기를 실패했습니다.');
    }
    setLoading(false);
  };

  // console.log(useAuth);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign-up</h2>
          {JSON.stringify(user)}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </>
  );
};

export default SignUp;
