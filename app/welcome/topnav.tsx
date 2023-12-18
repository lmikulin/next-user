'use client'

import { Link, Button, Heading, Spacer } from '@chakra-ui/react';
import { signOut } from "next-auth/react";
import NavBar from '../components/navbar';

interface WelcomeNavProps {
  user?: string
}

export default function WelcomeNav({ user }: WelcomeNavProps) {
  const logout = async () => signOut();

  return (
    <NavBar>
      <Heading size='md'>Welcome {user}</Heading>
      <Spacer />
      <Link href='/' onClick={logout}>Logout</Link>
      <Button colorScheme='facebook' variant='outline' onClick={logout}>Logout</Button>
    </NavBar>
  )
}
