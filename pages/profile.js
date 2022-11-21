import { Avatar, Box, Center, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, []);
  return (
    <Box className="">
      <Center>
        <Text fontSize={'2xl'}>Your Profile</Text>
      </Center>
      <br />
      <Center>
        <Avatar size={'lg'} src={session?.user.image} />
      </Center>
      <br />
      <Center>Name : {session?.user.name}</Center>
      <Center>Email : {session?.user.email}</Center>
    </Box>
  );
};
export default Profile;
