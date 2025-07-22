import React from 'react'
import me from '../../images/me.jpeg'
import story1 from '../../images/story1.png'
import { Link } from 'react-router-dom'
import story2 from '../../images/story2.jpg'
import recom1 from '../../images/recom1.jpg'
import recom2 from '../../images/recom2.jpg'
import recom3 from '../../images/recom3.jpg'
import recom4 from '../../images/recom4.jpg'
import recom5 from '../../images/recom5.jpg'

import { Flex , Box , Image, HStack , Text, Stack , Divider} from '@chakra-ui/react'
import styles from './styles.module.css'

function Notes() {
  return (
       <Flex direction="column" mt="30px" >
           <HStack justifyContent="space-between" ml="2px">
                    
                    <Text fontWeight="bold" fontSize="16px"> Mesajlar </Text>
                     <Link to="/">
                     <Text  fontWeight="medium" fontSize="16px"  mr="36px"color="blue.400"> Request(1) </Text></Link>
                 
                </HStack>
              
               
                <ul className={styles.list2}>
             <Box  mt="25px"   >
             <Link to="/" >
               <li>
                <HStack p="10px">
                 
                  <Box width="55px" height="55px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg"> 
                  <Image src={recom3} width="52px" height="52px" rounded="full"    />
                  </Box>
                  
                   <Box pl="8px">
                   <Text fontWeight="medium" fontSize="13px" color="blackAlpha.900"  >
                    Mryildirim
                   </Text>
                   <HStack>
                   <Text fontSize="11px"  color="blackAlpha.600" >
                    Bir dosya eki gönderdi.
                   </Text>
                   <Text fontSize="11px"  color="blackAlpha.600" > .11dk</Text>
                   </HStack>
                   </Box>
                   
                   </HStack>
               </li>
               </Link>
               <Link to="/" >
               <li>
                <HStack p="10px">
                 
                  <Box width="55px" height="55px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg"> 
                  <Image src={recom1} width="52px" height="52px" rounded="full"    />
                  </Box>
                  
                   <Box pl="8px">
                   <Text fontWeight="medium" fontSize="13px" color="blackAlpha.900"  >
                    ecebeyzaozen
                   </Text>
                   <HStack>
                   <Text fontSize="11px"  color="blackAlpha.600" >
                    Bir dosya eki gönderdi.
                   </Text>
                   <Text fontSize="11px"  color="blackAlpha.600" > .11dk</Text>
                   </HStack>
                   </Box>
                   
                   </HStack>
               </li>
               </Link>
               <Link to="/" >
               <li>
                <HStack p="10px">
                 
                  <Box width="55px" height="55px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg"> 
                  <Image src={recom2} width="52px" height="52px" rounded="full"    />
                  </Box>
                  
                   <Box pl="8px">
                   <Text fontWeight="medium" fontSize="13px" color="blackAlpha.900"  >
                    sametefehann
                   </Text>
                   <HStack>
                   <Text fontSize="11px"  color="blackAlpha.600" >
                    Bir dosya eki gönderdi.
                   </Text>
                   <Text fontSize="11px"  color="blackAlpha.600" > .11dk</Text>
                   </HStack>
                   </Box>
                   
                   </HStack>
               </li>
               </Link>
               <Link to="/" >
               <li>
                <HStack p="10px">
                 
                  <Box width="55px" height="55px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg"> 
                  <Image src={recom4} width="52px" height="52px" rounded="full"    />
                  </Box>
                  
                   <Box pl="8px">
                   <Text fontWeight="medium" fontSize="13px" color="blackAlpha.900"  >
                    dilorsa
                   </Text>
                   <HStack>
                   <Text fontSize="11px"  color="blackAlpha.600" >
                    Bir dosya eki gönderdi.
                   </Text>
                   <Text fontSize="11px"  color="blackAlpha.600" > .11dk</Text>
                   </HStack>
                   </Box>
                   
                   </HStack>
               </li>
               </Link>
               <Link to="/" >
               <li>
                <HStack p="10px">
                 
                  <Box width="55px" height="55px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg"> 
                  <Image src={recom5} width="52px" height="52px" rounded="full"    />
                  </Box>
                  
                   <Box pl="8px">
                   <Text fontWeight="medium" fontSize="13px" color="blackAlpha.900"  >
                    tuvafidnn
                   </Text>
                   <HStack>
                   <Text fontSize="11px"  color="blackAlpha.600" >
                    Bir dosya eki gönderdi.
                   </Text>
                   <Text fontSize="11px"  color="blackAlpha.600" > .11dk</Text>
                   </HStack>
                   </Box>
                   
                   </HStack>
               </li>
               </Link>
               <Link to="/" >
               <li>
                <HStack p="10px">
                 
                  <Box width="55px" height="55px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg"> 
                  <Image src={recom2} width="52px" height="52px" rounded="full"    />
                  </Box>
                  
                   <Box pl="18px">
                   <Text fontWeight="medium" fontSize="13px" color="blackAlpha.900"  >
                    esmagencerr
                   </Text>
                   <HStack>
                   <Text fontSize="11px"  color="blackAlpha.600" >
                    Bir dosya eki gönderdi.
                   </Text>
                   <Text fontSize="11px"  color="blackAlpha.600" > .11dk</Text>
                   </HStack>
                   </Box>
                   
                   </HStack>
               </li>
               </Link>
               </Box>
             

              
            
           </ul>
          
          
           </Flex>
  )
}

export default Notes