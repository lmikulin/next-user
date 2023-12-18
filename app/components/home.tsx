'use client'
import { Button, ButtonGroup, useDisclosure, Heading, Spacer } from '@chakra-ui/react';
import { signOut } from "next-auth/react"
import NavBar from './navbar';
import JobTitle from '../info/page';
import RegisterForm from './register';
import LoginForm from './login';

interface LandingPageProps {
  user?: string
}

export function LandingPage() {
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

export function WelcomePage({ user }: LandingPageProps) {
  const logout = async () => signOut();

  return (
    <>
      <NavBar>
        <Heading size='md'>Welcome {user}</Heading>
        <Spacer />
        <Button colorScheme='facebook' variant='outline' onClick={logout}>Logout</Button>
      </NavBar>
      <JobTitle />
    </>
  )
}