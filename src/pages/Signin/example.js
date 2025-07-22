import React from 'react'
import {Flex, Box , Image} from '@chakra-ui/react'
import phone from '../../images/phone.png'

function Example() {
  return (
    <Flex justifyContent="center" alignItems="center" mt="30px" ml="200px">
        <Box>
            <Image src={phone} height="550px" width="350px" />
        </Box>
    </Flex>
  )
}

export default Example