'use client'

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup
} from '@chakra-ui/react';

interface RegisterFormProps {
  isOpen: boolean,
  onClose: () => void
}

export default function RegisterForm({ isOpen, onClose }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    setIsLoading(true);
    const registerResponse = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        username
      })
    });

    if (registerResponse?.ok) {
      const loginResponse = await signIn('credentials', {
        username,
        redirect: false
      });
      setIsLoading(false);

      if (loginResponse?.ok) {
        router.push('/welcome');
        router.refresh();
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input placeholder="username" name="username" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button isLoading={isLoading} colorScheme='facebook' type="submit" mr="4">
                Register
              </Button>
              <Button colorScheme='facebook' variant='outline' onClick={onClose}>Cancel</Button>
            </ButtonGroup>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
