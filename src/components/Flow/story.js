import React from 'react'
import me from '../../images/me.jpeg'
import story1 from '../../images/story1.png'
import story2 from '../../images/story2.jpg'
import story3 from '../../images/story3.jpg'
import story4 from '../../images/story4.jpg'
import story5 from '../../images/story5.jpg'
import story6 from '../../images/story6.jpg'

import { Flex , Box , Image, HStack , Text, Stack , Divider} from '@chakra-ui/react'
import styles from './styles.module.css'

function Story() {
  return (
    <>

      <Stack m="45px" mb="14px" justifyContent="center">
        <HStack>
          <Text fontWeight="bold"color="black"> Senin İçin</Text>
          <Text color="blackAlpha.500"> Takip Ettiklerin</Text>
        </HStack>
     
      </Stack>
    <Flex flexDirection="row">
     
      <Box ml="57px" justifyContent="center">
        <ul className={styles.list}>
          <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story1} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
            <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story2} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
            <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story3} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
            <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story3} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
            <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story4} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
            <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story5} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
            <Box mr="28px"  width="65px" height="65px" rounded="full"  border="2px" borderColor="pink.500" boxShadow="lg" >
            <li>
                <Image src={story6} width="62px" height="62px" rounded="full"    />
            </li>
            </Box>
        </ul>
        </Box>
    </Flex>
    </>
  )
}

export default Story