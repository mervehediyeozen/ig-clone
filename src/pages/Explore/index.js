import React from 'react'
import Main from '../../components/Feed/main'
import Navbar from '../../components/Navbar'
import { Flex , Box } from '@chakra-ui/react'
function Explore() {
  return (
    <Flex>
        <Box width={["10%" , "38%"]} >
            <Navbar/>
        </Box>
        <Box width={["80%" , "90%"]}>
        <Main/>
        </Box>
        <Box width={["1%" , "12%"]}>
        
        </Box>
       
    </Flex>
  )
}

export default Explore