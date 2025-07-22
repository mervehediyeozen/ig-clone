import React from 'react'
import Navbar from '../../components/Navbar'
import Flow from '../../components/Flow/main'
import {Flex, Box} from '@chakra-ui/react'
import Recommend from '../../components/Flow/recommend'



function Main() {
  
  return (
    <Flex>
      <Box width= {[ "%20" , "320px"]}>
        <Navbar/>
        </Box> 
        <Box width= {[ "%50" , "%80"]}>
        <Flow/>
        </Box> 
        <Box width= {[ "%20" , "%55"]}>
         <Recommend/>
        </Box> 
        <Box width= {[ "0" , "%5"]}>
        
        </Box> 
       
    </Flex>
  )
}

export default Main