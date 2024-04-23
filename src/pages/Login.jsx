import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder for login logic
  };

  return (
    <Box p={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormLabel>Password</FormLabel>
        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button mt={4} onClick={handleLogin}>Login</Button>
      </FormControl>
    </Box>
  );
};

export default Login;
