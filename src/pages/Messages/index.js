import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import Main from '../../components/Message/main';
import SendMsj from '../../components/Message/sendmsj';

function MessagesPage() {


  return (
    <Flex direction="row" wrap="wrap">
      {/* Navbar kısmı */}
      <Box width={["70%", "6%"]}>
        <Navbar />
      </Box>
      
      {/* Main kısmı, Navbar'ın yanında olacak şekilde hizalanacak */}
      <Box width={["100%", "30%"]}>
        <Main />
      </Box>
      <Box width={["100%", "60%"]}>
      <SendMsj/>
      </Box>
     
    </Flex>
  );
}

export default MessagesPage;
