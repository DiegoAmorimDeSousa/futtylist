import React from 'react';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <div className='main'>
        <div className="title">Login</div>
        <div className="login-button">
          Entrar
        </div>
      </div>
    </Container>
  );
}

export default Login;