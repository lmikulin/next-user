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

interface LoginFormProps {
  isOpen: boolean,
  onClose: () => void
}

export default function LoginForm({ isOpen, onClose }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsLoading(true);
    const response = await signIn('credentials', {
      username: formData.get('username'),
      redirect: false
    });
    setIsLoading(false);

    if (response?.ok) {
      router.push('/welcome');
      router.refresh();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login to your account</ModalHeader>
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
                Login
              </Button>
              <Button colorScheme='facebook' variant='outline' onClick={onClose}>Cancel</Button>
            </ButtonGroup>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
