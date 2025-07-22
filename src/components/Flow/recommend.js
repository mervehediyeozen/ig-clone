import React, { useState } from 'react'
import me from '../../images/me.jpeg'
import recom1 from '../../images/recom1.jpg'
import recom2 from '../../images/recom2.jpg'
import recom3 from '../../images/recom3.jpg'
import recom4 from '../../images/recom4.jpg'
import recom5 from '../../images/recom5.jpg'
import { Flex , Box , Image, HStack , Text, Stack , Button} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFollow } from '../../redux/mainSlice';
import { useAuth } from '../../contexts/AuthContext' 

function Recommend() {
    const {user} = useAuth();
    const dispatch = useDispatch();
    const followed = useSelector((state) => state.main?.followed || {});
 
    if (!user) {
        return <Text>Yükleniyor...</Text>; // Kullanıcı bilgisi gelene kadar "Yükleniyor" yazısı gösterilebilir
      }

  
    const handleClick = (btnName) => {
               dispatch(changeFollow({btnName}));
    };
  return (
    <>
    
          <HStack ml="20px" mt="57px" >
              <Image src={me} width="45px" height="45px" rounded="full" />
                <Text color="black" fontWeight="bold" fontSize="13px"> {user.name}</Text>
                <Link to="/">
                <Text color="blue.400" pl="90px"fontWeight="bold" 
                fontSize="13px">Geçiş Yap</Text>
                </Link>
        </HStack>
        
    <Stack ml="20px" mt="42px"  >
      <HStack  justifyContent="space-between">
        <Text fontWeight="bold" color="blackAlpha.500"> Senin İçin Öneriler</Text>
        <Link to="/">
        <Text color="black" mr="22px" fontWeight="bold"> Tümünü Gör</Text>
        </Link>
      </HStack>
    
    </Stack>
     <Flex flexDirection="column" ml="20px" mt="20px">
     <ul className={styles.list2}>
        
            <li>
                 <HStack>
                    <Link to="/">
                <Image  src={recom5} width="45px" height="45px" rounded="full"    />
                </Link>
                <Box pt="10px">
                <Link to="/">
                <Text color="black" fontWeight="bold" pt="9px"fontSize="13px">efekanh</Text>
                </Link>
                <Flex  >
                    <Text  pb="10px" color="blackAlpha.300" fontSize="12px">  mervehediyee +4 diğer..</Text>
                </Flex>
                </Box>
    
                <Button variant="ghost" size="xs"  _hover={{ bg: "white" }}  color="blue.400" pl="90px"fontWeight="bold" fontSize="13px" 
                onClick={()=> handleClick("item1")}>
                     {followed.item1 ? "Takipten çık" : "Takip Et"}
                </Button>
                </HStack>
               
            </li> 
            <li>
                 <HStack>
                    <Link to="/">
                <Image  src={recom1} width="45px" height="45px" rounded="full"    />
                </Link>
                <Box pt="10px">
                <Link to="/">
                <Text color="black" fontWeight="bold" pt="9px"fontSize="13px">meryemzeliha</Text>
                </Link>
                <Flex  >
                    <Text  pb="10px" color="blackAlpha.300" fontSize="12px">  mervehediyee +4 diğer..</Text>
                </Flex>
                </Box>
                <Button variant="ghost" size="xs"  _hover={{ bg: "white" }}  color="blue.400" pl="90px"fontWeight="bold" fontSize="13px"
                onClick={()=> handleClick("item2")} >
               {followed.item2 ? "Takipten çık" : "Takip Et"}
                </Button>
                </HStack>
               
            </li> 
            <li>
                 <HStack>
                    <Link to="/">
                <Image  src={recom2} width="45px" height="45px" rounded="full"    />
                </Link>
                <Box pt="10px">
                <Link to="/">
                <Text color="black" fontWeight="bold" pt="9px"fontSize="13px">hazaldogru</Text>
                </Link>
                <Flex  >
                    <Text  pb="10px" color="blackAlpha.300" fontSize="12px">  mervehediyee +4 diğer..</Text>
                </Flex>
                </Box>
    
                <Button variant="ghost" size="xs"  _hover={{ bg: "white" }}  color="blue.400" pl="90px"fontWeight="bold" fontSize="13px"
                onClick={()=> handleClick("item3")} >
                {followed.item3 ? "Takipten çık" : "Takip Et"}
                </Button>
                </HStack>
               
            </li> 
            <li>
                 <HStack>
                    <Link to="/">
                <Image  src={recom3} width="45px" height="45px" rounded="full"    />
                </Link>
                <Box pt="10px">
                <Link to="/">
                <Text color="black" fontWeight="bold" pt="9px"fontSize="13px">ozgecetin</Text>
                </Link>
                <Flex  >
                    <Text  pb="10px" color="blackAlpha.300" fontSize="12px">  mervehediyee +4 diğer..</Text>
                </Flex>
                </Box>
                <Button variant="ghost" size="xs"  _hover={{ bg: "white" }}  color="blue.400" pl="90px"fontWeight="bold" fontSize="13px" 
                onClick={()=> handleClick("item4")}>
                {followed.item4 ? "Takipten çık" : "Takip Et"}
                </Button>
                </HStack>
               
            </li> 
            <li>
                 <HStack>
                    <Link to="/">
                <Image  src={recom4} width="45px" height="45px" rounded="full"    />
                </Link>
                <Box pt="10px">
                <Link to="/">
                <Text color="black" fontWeight="bold" pt="9px"fontSize="13px">candemir</Text>
                </Link>
                <Flex  >
                    <Text  pb="10px" color="blackAlpha.300" fontSize="12px">  mervehediyee +4 diğer..</Text>
                </Flex>
                </Box>
    
                <Button variant="ghost" size="xs"  _hover={{ bg: "white" }}  color="blue.400" pl="90px"fontWeight="bold" fontSize="13px" 
                onClick={()=> handleClick("item5")}>
                   {followed.item5 ? "Takipten çık" : "Takip Et"}
                </Button>
                </HStack>
               
            </li> 


          
         
           
            </ul>
        </Flex>
          </>
  )
}

export default Recommend