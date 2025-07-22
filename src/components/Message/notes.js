import React from 'react'
import me from '../../images/me.jpeg'
import story1 from '../../images/story1.png'
import story2 from '../../images/story2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic} from '@fortawesome/free-solid-svg-icons';

import { Flex , Box , Image, HStack , Text, Stack , Divider} from '@chakra-ui/react'
import styles from './styles.module.css'

function Notes() {
  return (
    <Flex>
         <Box  >
           <ul className={styles.list}>
          
          
    
          <li style={{ position: 'relative' }}>
          <Box width="53px" height="43px"rounded="2xl" ml="15px" bg="white" border="2px" boxShadow="lg" position="absolute" borderColor="beige" mb="150px" top="-30px">
            <Text m="11px" fontSize="11px" mt="12px" color="blackAlpha.600"> Not..</Text>
          </Box>
              <Box
               mr="28px"width="77px" height="77px"rounded="full" border="2px"borderColor="pink.500" boxShadow="lg">
               <Image src={me} width="74px" height="74px" rounded="full" />
                </Box>
           <Text ml="21px" fontSize="12px" mt="4px" color="blackAlpha.600">
              Notun
               </Text>
               </li>
            
          <li style={{ position: 'relative' }}>
          <Box width="100px" height="50px"rounded="2xl" mr="50px"  bg="white" border="2px" boxShadow="lg" position="absolute" borderColor="beige" mb="150px" top="-35px"><Box>
               
            <Box m="5px" mt="7px">
            <HStack>
            <FontAwesomeIcon icon={faMusic} size='xs' />
            <Text fontSize="10px"  color="black" fontWeight="bold"> 
              Let It Happen
                      </Text>
            </HStack>
            </Box>
             
           <Text  fontSize="9px" textAlign="center" alignItems="center" justifyContent="center"  color="blackAlpha.600"> Tame Impala</Text>

            </Box>
            </Box>
              <Box
               mr="28px"width="77px" height="77px"rounded="full" border="2px"borderColor="pink.500" boxShadow="lg">
               <Image src={story2} width="74px" height="74px" rounded="full" />
                </Box>
           <Text ml="2px" fontSize="12px" mt="4px" color="blackAlpha.900">
              ecebeyzaozen
               </Text>
               </li>
               
              
            
           </ul>
           </Box>
          
           </Flex>
  )
}

export default Notes