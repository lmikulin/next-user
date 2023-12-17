'use client'

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Stack, Heading, Text } from '@chakra-ui/react';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await signIn('credentials', {
      username: formData.get('username'),
      redirect: false
    });

    if (response?.ok) {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <Box pt={1} bg="gray.200">
      <Stack direction="column" align="center" justify="left" py={10}>
        <Heading>Hello registered user</Heading>
        <Text>Please enter your username:</Text>
        <form onSubmit={handleSubmit}>
          <Text>
            Uername:
          </Text>
          <input type="text" name="username" />
          <button type="submit">Login</button>
        </form>
      </Stack>
    </Box>
  )
};