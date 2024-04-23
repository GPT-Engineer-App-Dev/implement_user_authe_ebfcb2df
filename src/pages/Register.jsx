import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Placeholder for registration logic
  };

  return (
    <Box p={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormLabel>Password</FormLabel>
        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <FormLabel>Confirm Password</FormLabel>
        <Input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <Button mt={4} onClick={handleRegister}>Register</Button>
      </FormControl>
    </Box>
  );
};

export default Register;
