'use client';

import { FormEvent } from 'react';
import { Card, Stack, Box, Button, Heading, FormControl, FormLabel, Textarea, CardBody, Spacer } from '@chakra-ui/react';

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
    <Card maxW='xl'>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <Heading size='sm'>
              Please enter your job title
            </Heading>
            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Textarea name="info" />
            </FormControl>
            <Box>
              <Button colorScheme='facebook' type="submit">Save</Button>
            </Box>
          </Stack>
        </form>
      </CardBody>
    </Card>
  )
}