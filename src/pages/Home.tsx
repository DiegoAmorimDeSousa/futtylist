import React from 'react';

import { Container } from './styles';

import Menu from '../components/menu/menu';
import List from '../components/list/list';

const pages: React.FC = () => {
  return (
    <Container>
      <Menu />
      <List />
    </Container>
  );
}

export default pages;