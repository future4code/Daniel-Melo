import React from 'react';
import {
  HStack, Text, Button, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthProvider';

const Header = () => {
  const { logout } = useAuth();

  return (
    <HStack
      as="header"
      justify="space-between"
      height={16}
      px={4}
    >
      <Text>Logo</Text>
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
