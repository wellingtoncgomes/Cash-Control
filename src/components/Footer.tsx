import { Box, Center, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter,  } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io'

export const Footer = () => {
  return (
    <Box backgroundColor='#2979FF'>
        <Center>
          <Box display='flex' alignItems='center'>
            <FaFacebook size={20} />
            <Text fontSize='2xl' marginRight='20px'>Facebook</Text>
          </Box>
          <Box display='flex' alignItems='center'>
            <FaInstagram size={20} />
            <Text fontSize='2xl' marginRight='20px'>Instagram</Text>
          </Box>
          <Box display='flex' alignItems='center'>
            <FaTwitter size={20} />
            <Text fontSize='2xl' marginRight='20px'>Twitter</Text>
          </Box>
          <Box display='flex' alignItems='center'>
            <IoIosChatbubbles size={20} />
            <Text fontSize='2xl' marginRight='20px'>SAQ</Text>
          </Box>
        </Center>
        <Center>
            <Text fontSize='sm' marginTop='2'>&copy; Todos os direitos reservados - Cash Control</Text>
        </Center>
    </Box>
  );
};