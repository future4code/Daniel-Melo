import React from 'react';
import {
  Box, Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/core';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthForm = () => (
  <Box
    alignSelf="center"
    mt={8}
  >
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Login</Tab>
        <Tab>Signup</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>
        <TabPanel>
          <SignupForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default AuthForm;
