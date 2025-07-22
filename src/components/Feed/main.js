import { Box, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Post from './post';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('/Explore'); // Başlangıçta aktif linki belirliyoruz

  return (
    <Box justifyContent="center" alignItems="center" height="100vh" mt="60px">
      <HStack>
        <Link to="/Explore" onClick={() => setActiveLink('/Explore')}>
          <Text fontWeight="bold" color={activeLink === '/Explore' ? 'black' : 'gray.300'}> Senin İçin </Text>
        </Link>
        <Link to="/Explore" onClick={() => setActiveLink('/')}>
          <Text fontWeight="bold" color={activeLink === '/' ? 'black' : 'gray.300'}> Kişiselleştirilmemiş </Text>
        </Link>
      </HStack>
      <Box  mt="10px">
        <Post/>
      </Box>
    </Box>
  );
};

export default Navigation;
