import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import me from '../../images/me.jpeg'
import message from '../../images/message.png';
import { Image, Box, Flex, Text, Center, Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalCloseButton, ModalContent, ModalOverlay, Input, Divider, HStack } from '@chakra-ui/react';
import { addSearch, findSearch } from '../../redux/mainSlice';

function SendMsj() {
  const dispatch = useDispatch();
  const [send, setSend] = useState(''); // Arama sorgusunu tutan state
  const { searchList } = useSelector((state) => state.main); // Redux store'dan searchList almak
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    dispatch(addSearch(send)); // Arama sorgusunu ekler
    setIsOpen(false);
    setSend("");
  };

  // Arama sorgusu değiştikçe filtreleme işlemi yap
  useEffect(() => {
    console.log('Arama sorgusu değişti:', send); // Debug için
    if (send) {
      dispatch(findSearch(send)); // searchList'i filtrele
    }
  }, [send, dispatch]);



  return (
    <>
      <Flex justifyContent="center" alignContent="center" alignItems="center" textAlign="center" height="100vh">
        <Box justifyContent="center" alignContent="center" alignItems="center" textAlign="center">
          <Center>
            <Image src={message} width="100px" height="100px" />
          </Center>
          <Box>
            <Text mt="10px" fontSize="21px" color="black">
              Mesajların
            </Text>
            <Text mt="5px" color="blackAlpha.700" fontSize="14px">
              Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.
            </Text>
            <Button size="sm" mt="17px" variant="solid" bg="linkedin.600" color="white" _hover={{ bg: 'linkedin.700' }} onClick={handleOpen}>
              Mesaj Gönder
            </Button>
          </Box>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent maxWidth="550px" width="80%" mx="auto" height="470px">
          <ModalHeader>
            <Text textAlign="center" fontWeight="bold" fontSize="15px">
              Yeni Mesaj
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <Divider borderColor="blackAlpha.500" />
          <ModalBody>
            <HStack>
              <Text>Kime:</Text>
              <Input
                value={send}
                onChange={(e) => setSend(e.target.value)} // Arama sorgusunu güncelle
                width="full"
                variant="ghost"
                placeholder="Ara.."
              />
            </HStack>

            {/* Arama sonuçlarını kontrol et */}
            {Array.isArray(searchList) && searchList.length > 0 ? (
              <Box mt="10px">
                {searchList.map((item, index) => (
                 
                    <Box _hover={{bg : "blackAlpha.100"}} key={index} >
                       <HStack mt="15px" >
                    <Image src={me} width="45px" height="45px" rounded="full"/>
                    <Link to="/" >
                    <Box>
                  <Text fontSize="14px" color="blackAlpha.800" >
                    {item}
                  </Text>
                  <Text fontSize="11px" color="blackAlpha.600"> mervhed</Text>
                  </Box>
                  </Link>
                  </HStack>
                  </Box>
                 
                ))}
              </Box>
            ) : (
              <Text color="blackAlpha.600" fontSize="14px">
                Hiç hesap bulunamadı.
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button width="full" colorScheme="blue" onClick={handleClose}>
              Gönder
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendMsj;
