import { Text, Card, Stack, Box, CardBody } from '@chakra-ui/react';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import WelcomeNav from './topnav';
import InfoForm from './form';

// TODO: error handling
export default async function UserPage() {
  const session = await getServerSession();
  const username = session?.user?.name || '';
  const details = await prisma.user.findUnique({
    where: {
      username
    }
  });

  return (
    <>
      <WelcomeNav user={username} />
      <Card>
        <CardBody>
          <Stack spacing="4">
            <Box gap="4">
              <Text fontWeight="bold">
                Your job title:
              </Text>
              <Text>{`"${details?.info}"`}</Text>
            </Box>
            <Box>
              <InfoForm username={username} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}