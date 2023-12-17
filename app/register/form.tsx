'use client'

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Stack, Heading, Text } from '@chakra-ui/react';

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username')
      })
    });

    if (response?.ok) {
      router.push('/login');
      router.refresh();
    }
  };

  return (
    <Box pt={1} bg="gray.200">
      <Stack direction="column" align="center" justify="left" py={10}>
        <Heading>Welcome to the Nextjs Palace!</Heading>
        <Text>Please register your username:</Text>
        <form onSubmit={handleSubmit}>
          <Text>
            Uername:
          </Text>
          <input type="text" name="username" />
          <button type="submit">Register</button>
        </form>
      </Stack>
    </Box>
  )
};