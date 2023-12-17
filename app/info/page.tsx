'use client';

import { FormEvent } from 'react';
import { Box, Stack, Heading, Text } from '@chakra-ui/react';

// TODO: error handling
export default function JobTitle() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch(`/api/update`, {
      method: 'PUT',
      body: JSON.stringify({
        info: formData.get('info')
      })
    });

    console.log('updated user info response', response)
  };
  return (
    <Box pt={1} bg="gray.200">
      <Stack direction="column" align="center" justify="left" py={10}>
        <Heading>Please enter your job title</Heading>
        <form  onSubmit={handleSubmit}>
          <Text>
            Job Title:
          </Text>
          <input type="text" name="info" />
          <button type="submit">Save</button>
        </form>
      </Stack>
    </Box>
  )
}