'use client'

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from '@chakra-ui/react';

export default function SubmitButton({...props}: ButtonProps) {
  const { pending } = useFormStatus();

  return <Button {...props} isLoading={pending} />
}
