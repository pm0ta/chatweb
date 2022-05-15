import React from 'react';
import { auth, provider } from '../../services/firebase';
import * as C from './styles';

function Login() {

  function handleSignin() {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <C.Container>
      <C.Button onClick={handleSignin} > Logar com o Google </C.Button>
    </C.Container>
  );
}

export default Login;