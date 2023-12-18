'use client'

import { Button, ButtonGroup, useDisclosure } from '@chakra-ui/react';
import NavBar from './components/navbar';
import RegisterForm from './components/register';
import LoginForm from './components/login';

export default function LandingPage() {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin
  } = useDisclosure();

  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister
  } = useDisclosure();

  return (
    <NavBar>
      <ButtonGroup gap="2">
        <Button colorScheme='facebook' onClick={onOpenLogin} variant='outline'>Login</Button>
        <Button colorScheme='facebook' onClick={onOpenRegister}>Sign Up</Button>
      </ButtonGroup>
      <LoginForm isOpen={isOpenLogin} onClose={onCloseLogin} />
      <RegisterForm isOpen={isOpenRegister} onClose={onCloseRegister} />
    </NavBar>
  )
}
