import { useEffect}  from 'react'
import { Link } from 'react-router-dom';
import { toggleSearch } from '../../redux/mainSlice';
import Notes from './notes'
import Message from './messages'
import { Flex , Box, HStack , Text } from '@chakra-ui/react'
import { useSelector , useDispatch } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons'


function Main() {
    const { user } = useAuth();
    const openSearch = useSelector((state) => state.main.openSearch);
    const notif = useSelector((state) => state.main.openNotif);
    if (!user) {
            return <Text>Yükleniyor...</Text>; // Kullanıcı bilgisi gelene kadar "Yükleniyor" yazısı gösterilebilir
          }
  return (
    <>
    {!openSearch && !notif  && ( 
            <Flex direction="column" wrap="wrap" width="370px" 
             height="1500px" bg="white" pt="40px" borderRight="1px" borderColor="blackAlpha.300">
                <HStack justifyContent="space-between">
                    <Link to ="/">
                    <Text fontWeight="bold" fontSize="20px"> {user.name} </Text>
                    </Link>
                    <FontAwesomeIcon size='lg' icon={faEdit} style={{ paddingRight : "20px"}} />
                </HStack>
            <Box pt="60px">
                <Notes/>
            </Box>
            <Box>
                <Message/>
                </Box>
    
          </Flex>
    )}
  
    </>
  
  )
}

export default Main