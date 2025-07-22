import { useState , useEffect} from 'react'
import { Button ,Flex , Image , Box, HStack , Text, Stack , Divider, Heading , Input} from '@chakra-ui/react'
import styles from './styles.module.css'
import logo from '../../images/logo.png'
import logo2 from '../../images/logo3.jpg'
import me from '../../images/me.jpeg'
import { motion } from 'framer-motion';
import { useDispatch , useSelector} from 'react-redux'
import { toggleSearch ,addSearch , findSearch} from '../../redux/mainSlice'
import Main from '../Notifications/main'
import recom1 from '../../images/recom1.jpg'
import recom2 from '../../images/recom2.jpg'

function Follow() {
   
      return (
          <> 
          <HStack mt="30px" ml="30px">
          
          <Box width="30px" height="30px" rounded="full"  bg="white" border="2px" boxShadow="lg" borderColor="beige">
                        <Image src={recom1} width="30px" height="30px" rounded="full" mr="60px"   /> 
                      </Box>
             <Image src={recom2} width="30px" height="30px" rounded="full" position="absolute"  top="90px" ml="70px"/>
           
            <Box >
                <Text ml="12px" mt="15px" color="black" fontWeight="bold" fontSize="14px" >
                    Takip İstekleri
                </Text>
                <Text ml="13px" color="blackAlpha.700"  fontSize="12px">
                     tubafidn + 198 kişi  
                </Text>
            </Box>
          </HStack>
          
          <Divider mt="14px" borderColor="blackAlpha.300"  borderEndWidth="63px" />
         </>
      )
}

export default Follow