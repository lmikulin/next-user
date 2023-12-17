'use client'

import { signOut } from "next-auth/react"

export default function Logout() {
  const logout = async () => signOut();

  return (
    <span onClick={logout}>Logout</span>
  )
}