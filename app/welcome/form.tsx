'use client'

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
  useDisclosure,
  ButtonGroup
} from '@chakra-ui/react';
import { updateUser } from './action';
import SubmitButton from '../components/button';

interface InfoFormProps {
  username: string | undefined
}

export default function InfoForm({ username }: InfoFormProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formAction = async (formData: FormData) => {
    await updateUser(formData);
    onClose();
  }

  return (
    <>
      <Button colorScheme='facebook' onClick={onOpen}>Update Job Title</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Job Title</ModalHeader>
          <ModalCloseButton />
          <form action={formAction}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input value={username} name="username" readOnly />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Job Title</FormLabel>
                <Input placeholder="job title" name="info" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <SubmitButton colorScheme='facebook' type="submit" mr="4">
                  Save
                </SubmitButton>
                <Button colorScheme='facebook' variant='outline' onClick={onClose}>Cancel</Button>
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
