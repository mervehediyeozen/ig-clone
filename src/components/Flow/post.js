import React from 'react'
import { Flex , Box , Image, HStack , Text, Stack , Divider} from '@chakra-ui/react'
import post from '../../images/post.jpeg'
import post1 from '../../images/postprofile.jpeg'
import { Link } from '@chakra-ui/react'

function Post() {
  return (
    <div>

        <Box mt="90px" ml="90px">
            <Box>
            <HStack>
              
                <Image src={post1} width="44px" height="44px" rounded="full" />
           <Box pt="10px">
            <Link to="/">
           <Text color="black" fontWeight="bold" fontSize="13px">ecebeyzaozen</Text>
           </Link>
           <Flex>
           <Text  color="blackAlpha.900" fontSize="12px"> İzmir </Text>
           </Flex>
           </Box>

            <Text color="blackAlpha.500" pb="7px" fontSize="15px"> .34d </Text>
            </HStack>
        
            </Box>
            <Box >
                <Image src={post}  width="550px" height="500px"/>
            </Box>
        </Box>
    </div>
  )
}

export default Post