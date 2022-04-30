import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logos/logo.svg';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 8rem;
`;

const Logo = styled(Link)``;

const Menu = styled.nav``;

const MenuLink = styled(Link)`
  font-size: 1.6rem;
  margin: 2.5rem;
  color: #636363;
  text-decoration: none;
  font-weight: 400;
`;

const Header = () => (
  <Wrapper>
    <Logo to="/">
      <img src={logo} alt="logo" />
    </Logo>
    <Menu>
      <MenuLink to="/search/javascript">Search</MenuLink>
      <MenuLink to="#how-it-works">How it works</MenuLink>
      <MenuLink to="#about">About</MenuLink>
    </Menu>
  </Wrapper>
);

export default Header;
