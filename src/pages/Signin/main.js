import React from 'react'
import Example from './example'
import Form from './form'
import {Flex, Box} from '@chakra-ui/react'


function Main() {
  return (
    <Flex  mt="10px" mr="100px">
          <Box width={["10%" ,"13%"]}>
          
          </Box>
        <Box width={["70%" ,"65%"]}  ml="70px">
          <Example/>
        </Box>
        <Box width={["20%" ,"65%"]} >
           <Form/>
        </Box>
        <Box width={["10%" ,"5%"]}>
         
        </Box>
    </Flex>
  )
}

export default Main