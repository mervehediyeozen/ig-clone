import { useState , useEffect} from 'react'
import { Button ,Flex , Image , Box, HStack , Text, Stack , Divider, Heading , Input} from '@chakra-ui/react'
import styles from './styles.module.css'
import story1 from '../../images/story1.png'
import story2 from '../../images/story2.jpg'
import story3 from '../../images/story3.jpeg'
import recom5 from '../../images/recom5.jpg'
import recom4 from '../../images/recom4.jpg'
import recom3 from '../../images/recom3.jpg'
import recom1 from '../../images/recom1.jpg'
import recom2 from '../../images/recom2.jpg'
import me from '../../images/me.jpeg'
import { motion } from 'framer-motion';
import { useDispatch , useSelector} from 'react-redux'
import { toggleSearch ,addSearch , findSearch} from '../../redux/mainSlice'
import Main from '../Notifications/main'


function Inter() {
   
      return (
          <> 
          <Box m="22px">
          <Heading mt="15px" fontSize="15px"  fontWeight="extrabold"> Bu hafta</Heading>
         
             <HStack  mt="23px" pl="10px">
                     <Image src={recom1} width="40px" height="40px" rounded="full"   />     
                     <Box   >
                        <HStack>
                      <Text  color="black" fontWeight="bold" fontSize="14px" >
                          meryemzeliha
                     </Text>
                     <Text  color="blackAlpha.700"  fontSize="12px">
                           seni takip 
                     </Text>
                     </HStack>
                     <Text color="blackAlpha.700"  fontSize="12px"> etmek istiyor.  </Text>
                        </Box>
                        <Box pl="10px">
                        <Button bg="linkedin.600" color="white" size="sm" rounded="lg"> Onayla </Button>
                        <Button bg="blackAlpha.100" color="black" size="sm" rounded="lg"> Sil </Button>
                        </Box>
                      </HStack>

                      <HStack mt="5px" ml="10px" spacing="10px">
  <Box width="30px" height="30px" rounded="full" bg="white" border="2px" boxShadow="lg" borderColor="beige">
    <Image src={story1} width="30px" height="30px" rounded="full" mr="60px" /> 
  </Box>

  <Image src={story2} width="30px" height="30px" rounded="full" position="absolute" top="266px" ml="70px" />

  <Box>
    <Text ml="12px" mt="15px" color="black" fontWeight="bold" fontSize="14px">
      tubafidnn , ecebeyzaozen
    </Text>
    <Text ml="13px" color="blackAlpha.700" fontSize="12px">
      ve diğer kişiler hikayeni beğendi.
    </Text>
  </Box>

  {/* Bu Box öğesinin içine margin-left: auto ekledik */}
  <Box ml="auto">
    <Image src={me} width="40px" height="40px" ml="30px"/>
  </Box>
</HStack>

                                         
                      </Box>
                      


                      <Divider mt="14px" borderColor="blackAlpha.300"  borderEndWidth="63px" />

                      <Box m="22px">
          <Heading mt="15px" fontSize="15px"  > Bu Ay</Heading>
         
             <HStack  mt="23px" pl="10px">
                     <Image src={recom3} width="40px" height="40px" rounded="full"   />     
                     <Box   >
                        <HStack>
                      <Text  color="black" fontWeight="bold" fontSize="14px" >
                          ozgecetin
                     </Text>
                     <Text  color="blackAlpha.700"  fontSize="12px">
                           seni takip 
                     </Text>
                     </HStack>
                     <Text color="blackAlpha.700"  fontSize="12px"> etmek istiyor.  </Text>
                        </Box>
                        <Box pl="40px">
                        <Button bg="linkedin.600" color="white" size="sm" rounded="lg"> Onayla </Button>
                        <Button bg="blackAlpha.100" color="black" size="sm" rounded="lg"> Sil </Button>
                        </Box>
                      </HStack>
                      <HStack  mt="23px" pl="10px">
                     <Image src={recom4} width="40px" height="40px" rounded="full"   />     
                     <Box   >
                        <HStack>
                      <Text  color="black" fontWeight="bold" fontSize="14px" >
                          candemir
                     </Text>
                     <Text  color="blackAlpha.700"  fontSize="12px">
                           seni takip 
                     </Text>
                     </HStack>
                     <Text color="blackAlpha.700"  fontSize="12px"> etmek istiyor.  </Text>
                        </Box>
                        <Box pl="40px">
                        <Button bg="linkedin.600" color="white" size="sm" rounded="lg" > Onayla </Button>
                        <Button bg="blackAlpha.100" color="black" size="sm" rounded="lg" > Sil </Button>
                        </Box>
                      </HStack>
                      <HStack  mt="23px" pl="10px">
                     <Image src={recom5} width="40px" height="40px" rounded="full"   />     
                     <Box   >
                        <HStack>
                      <Text  color="black" fontWeight="bold" fontSize="14px" >
                          efekanh
                     </Text>
                     <Text  color="blackAlpha.700"  fontSize="12px">
                           seni takip 
                     </Text>
                     </HStack>
                     <Text color="blackAlpha.700"  fontSize="12px"> etmek istiyor.  </Text>
                        </Box>
                        <Box pl="49px">
                        <Button bg="linkedin.600" color="white" size="sm" rounded="lg" > Onayla </Button>
                        <Button bg="blackAlpha.100" color="black" size="sm" rounded="lg" > Sil </Button>
                        </Box>
                      </HStack>
                      
                      <HStack mt="5px" ml="10px" spacing="10px">
  <Box width="30px" height="30px" rounded="full" bg="white" border="2px" boxShadow="lg" borderColor="beige">
    <Image src={me} width="30px" height="30px" rounded="full" mr="60px" /> 
  </Box>

  <Image src={me} width="30px" height="30px" rounded="full" position="absolute" bottom="80px" ml="70px" />

  <Box>
    <Text ml="12px" mt="15px" color="black" fontWeight="bold" fontSize="14px">
      tubafidnn , ecebeyzaozen
    </Text>
    <Text ml="13px" color="blackAlpha.700" fontSize="12px">
      ve diğer kişiler hikayeni beğendi.
    </Text>
  </Box>

  {/* Bu Box öğesinin içine margin-left: auto ekledik */}
  <Box ml="auto">
    <Image src={me} width="40px" height="40px" ml="30px"/>
  </Box>
</HStack>

<HStack mt="5px" ml="10px" spacing="10px">
  <Box width="30px" height="30px" rounded="full" bg="white" border="2px" boxShadow="lg" borderColor="beige">
    <Image src={me} width="30px" height="30px" rounded="full" mr="60px" /> 
  </Box>

  <Image src={me} width="30px" height="30px" rounded="full" position="absolute" bottom="22px" ml="70px" />

  <Box>
    <Text ml="12px" mt="15px" color="black" fontWeight="bold" fontSize="14px">
      tubafidnn , ecebeyzaozen
    </Text>
    <Text ml="13px" color="blackAlpha.700" fontSize="12px">
      ve diğer kişiler hikayeni beğendi.
    </Text>
  </Box>

  <Box ml="auto">
    <Image src={me} width="40px" height="40px" ml="30px"/>
  </Box>
</HStack>

                      </Box>

         </>
      )
}

export default Inter