import React from 'react';
import {
  HStack, Image, Button, Input, InputGroup, InputLeftElement, useBreakpointValue,
} from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import logo from '../assets/logo.svg';
import mainLogo from '../assets/main_logo.svg';

const Header = () => {
  const { logout } = useAuth();
  const logoImage = useBreakpointValue({ base: logo, lg: mainLogo });

  return (
    <HStack
      as="header"
      justify="space-between"
      height={16}
    >
      <Link to="/feed">
        <Image src={logoImage} alt="logo" height="30px" />
      </Link>

      <InputGroup size="sm" maxWidth={56}>
        <InputLeftElement
          pointerEvents="none"
        >
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
      <Button
        size="sm"
        variant="outline"
        colorScheme="blue"
        onClick={logout}
      >
        Logout
      </Button>
    </HStack>
  );
};
export default Header;
