'use client'

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';
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
  Button
} from '@chakra-ui/react';

interface RegisterFormProps {
  isOpen: boolean,
  onClose: () => void
}

export default function RegisterForm({ isOpen, onClose }: RegisterFormProps) {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
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

      if(loginResponse?.ok) {
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
            <Button colorScheme='blue' mr={3} type="submit">
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
