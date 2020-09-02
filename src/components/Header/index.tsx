import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  currentPage: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  currentPage,
}: HeaderProps) => (
  <Container size={size} currentPage={currentPage}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link id="list" to="/">
          Listagem
        </Link>
        <Link id="import" to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
