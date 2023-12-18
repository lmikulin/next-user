import { Flex, Box } from '@chakra-ui/react';

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <Box bg="gray.200" w="100%" p={4} color="navy">
      <Flex minWidth='max-content' alignItems='center' justifyContent='right' gap='2'>
        {children}
      </Flex>
    </Box>
  )
}