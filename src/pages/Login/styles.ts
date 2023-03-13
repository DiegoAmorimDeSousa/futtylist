import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    background: var(--background-menu);
    width: 310px;
    height: 400px;
    border-radius: 15px;
  }

  .title {
    font-size: 30px;
    padding: 20px;
    color: var(--text-neutral);
    letter-spacing: 1.5px;
    font-family: var(--roboto-family);
  }

  .login-button {
    width: 242px;
    height: 36px;
    background: #2DCC70;
    border-radius: 5px;
  }
`;
