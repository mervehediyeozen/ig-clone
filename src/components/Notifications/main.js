import { useState , useEffect} from 'react';
import { Button, Flex, Image, Box, HStack, Text, Divider, Heading, Input } from '@chakra-ui/react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Follow from './follow';
import Inter from './inter';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch, addSearch, findSearch } from '../../redux/mainSlice';

function Main() {
  const MotionFlex = motion(Flex);
  const search = useSelector((state) => state.main.openSearch);

  return (
    <>
      <Box position="absolute">
        {!search && (
          <MotionFlex
            mt="10px"
            borderRight="1px"
            borderRadius="lg"
            boxShadow="lg"
            w="380px"
            bg="white"
            height="auto" // Yüksekliği 'auto' yapalım ki içeriğe göre ayarlansın
            borderColor="whiteAlpha.500"
            initial={{ opacity: 0, y: 9, x: 70 }}  
            animate={{
              opacity: 1 , 
              y: 10 ,
              x: 70   
            }} 
            transition={{ duration: 0.5 }}  
          >
            <Box >
                <HStack justifyContent="space-between" pl="15px" pt="10px">
                    
                    <Heading fontSize="23px" color="black" ml="10px" > Bildirimler </Heading>
                    <Link to="/">
                      <Text fontSize="14px"color="blue.400" ml="125px">
                           Filtrele
                          </Text>
                          </Link>
                          
              </HStack>

              <Follow/>
          
              <Inter/>
            </Box>
          </MotionFlex>
        )}
      </Box>
    </>
  );
}

export default Main;
