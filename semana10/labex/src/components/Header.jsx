import React from 'react';
import { Flex, Image, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useAuth } from '../context/AuthContext';

const Header = ({ isPrivatePage, withBackButton }) => {
  const { logout } = useAuth();

  const buttonsToRender = () => {
    if (isPrivatePage && withBackButton) {
      return (
        <Flex>
          <Link to="/trip/list">
            <Button size="md" variantColor="yellow">
              VOLTAR
            </Button>
          </Link>

          <Button ml={3} size="md" variantColor="purple" onClick={logout}>
            SAIR
          </Button>
        </Flex>
      );
    } if (isPrivatePage) {
      return (
        <Button size="md" variantColor="purple" onClick={logout}>
          SAIR
        </Button>
      );
    }

    return (
      <Link to="/login">
        <Button size="md" variantColor="purple" variant="outline">
          ADMIN
        </Button>
      </Link>
    );
  };

  return (
    <Flex
      as="header"
      height="70px"
      align="center"
      justify="space-between"
      px={{ xl: 0, base: 15 }}
      w={{ xl: '1170px', base: '100%' }}
    >
      <Image src={logo} alt="logo" />

      {buttonsToRender()}
    </Flex>
  );
};

export default Header;
