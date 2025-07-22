import { useState , useEffect} from 'react'
import { Button ,Flex , Image , Box, HStack , Text, Stack , Divider, Heading , Input} from '@chakra-ui/react'
import { Link  , useLocation} from 'react-router-dom'
import styles from './styles.module.css'
import logo from '../../images/logo.png'
import logo2 from '../../images/logo3.jpg'
import me from '../../images/me.jpeg'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch , faHeart , faMessage , faVideo , faPlus, faCompass,  faBars , faCog , faChartLine, faBookmark , faFlag , faSun , faExclamationCircle , faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { useDispatch , useSelector} from 'react-redux'
import { toggleSearch ,addSearch , findSearch, toggleNotif} from '../../redux/mainSlice'
import Main from '../Notifications/main'


function Navbar() {
   const location = useLocation();
   const notif= useSelector((state)  => state.main.openNotif);
   const isMessagesPage = location.pathname.includes("/Messages");;
   const [ search , setSearch] = useState("");
   const [ more , setMore] = useState("");
   const dispatch =  useDispatch();
   const openSearch = useSelector((state) => state.main.openSearch);
   const searches = useSelector((state) => state.main.searchList);
   
   useEffect(() => {
    if (search.trim()) {
      dispatch(findSearch(search)) // Arama terimi ile filtreleme
    }
  }, [search, dispatch])
   const handleSearch = () => {
    dispatch(toggleSearch());
  };
  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      dispatch(addSearch(search)) // Girilen arama terimi defaultSearchList içinde varsa ekle
      setSearch('') // Arama input'unu sıfırlayabiliriz
    }
  }
  const handleMore = () => {
    setMore(!more)
  };

  const handleNotif = () => {
    dispatch(toggleNotif());
  }


  

  const MotionFlex = motion(Flex);

  return (
    <> 

       <Box  position="absolute"> 
        {openSearch && (
            <MotionFlex
            border="1px"
            borderColor="deneme"
            ml="71px"
            bg="white"
            
            initial={{ opacity: 0, y: -20 }}  
            animate={{
              opacity: openSearch ? 1 : 0, 
              y: openSearch ? 0 : -20,     
            }} 
            transition={{ duration: 0.5 }}  
          >
          <Box borderRight="1px" borderRadius="lg"  boxShadow="lg"  w="320px"   height="700px" borderColor="whiteAlpha.500"  >
         <Heading m="30px" fontSize="23px" fontWeight="medium" > Ara </Heading>
         <Input mt="10px" ml="20px"size="md" bg="gray.100" width="270px" placeholder='Ara' borderRadius="md" value={search} onChange={(e) => setSearch(e.target.value)}   // Arama metnini değiştir
              onKeyDown={handleEnterPress} />
         <Divider mt="30px"borderColor="blackAlpha.400"/>
         <Text color="black" fontWeight="medium" m="18px"> Yakınlardakiler </Text>
         { searches.length > 0  && ( 
             <Box mt="10px" ml="20px">
             {searches.map((item, index) => (
              <HStack mt="13px">
                 <Image width="30px" height="25px" src={me} mr="15px" rounded="full"/>
                 <Link to="/">
               <Text key={index} color="gray.600" fontSize="14px">  {item} </Text>
               </Link>
               
                
              
               </HStack>
             ))}
           </Box>
         )} 
            { searches.length < 1  && ( 
             <Box mt="10px" ml="20px">
             
               <Text  color="gray.600" fontSize="14px">
                Henüz Arama Yok
               </Text>
            
           </Box>
         )}
      
         </Box>
         </MotionFlex>

      )}
       
   
        </Box>
        {notif && <Main />}

    <Flex direction="row" borderRight="1px"  borderColor="blackAlpha.400"    width={(openSearch || isMessagesPage || notif) ? "72px" : "250px"}
 position="relative">
      <Box  height="100vh" >
        
        
      <ul className={styles.list}>
        
      <li>
  <Link to="/Main">
    {/* Eğer openSearch ve isMessagesPage her ikisi de true ise logo2'yi, değilse logo'yu göster */}
    {(openSearch || isMessagesPage || notif) ? (
      <Box justifyContent="center">
        <Image mt="34px" mb="70px" ml="25px" src={logo2} w="24px" height="24px" />
      </Box>
    ) : (
      <Image m="32px" src={logo} w="100px" height="38px" />
    )}
  </Link>
</li>

    
     
        <li>
          <Box ml="10px"  width={(openSearch || isMessagesPage || notif) ? "50px" : "240px"}  mt="5px">
            <Link to="/Main">
          <Button width="full"  variant="ghost" fontWeight="bold" display="flex" justifyContent="left">
        <FontAwesomeIcon size='lg'icon={faHome} style={{ marginRight: '15px' }} />
        {!openSearch && !isMessagesPage && !notif && (

          <>
          Ana Sayfa
          </>
        )} 
        </Button>
        </Link>
        </Box>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage || notif) ? "50px" : "240px"} mt="17px">
    
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px" onClick={handleSearch}>
        <FontAwesomeIcon size='lg'icon={faSearch} style={{ marginRight: '15px' }} />
        {!openSearch && !isMessagesPage && !notif && (
          <>
          Ara
          </>
        )} 
        
        </Button>

      
        </Box>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage || notif ) ? "50px" : "240px"} mt="17px">
        <Link to="/Explore">
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px">
        <FontAwesomeIcon size='lg'icon={faCompass} style={{ marginRight: '15px' }} />
        {!openSearch && !isMessagesPage && !notif && (
          <>
          Keşfet
          </>
        )} 
        </Button>
        </Link>
        </Box>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage|| notif ) ? "50px" : "240px"} mt="17px">
        <Link to="/">
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px">
        <FontAwesomeIcon size='lg'icon={faVideo} style={{ marginRight: '15px' }} />
         {!openSearch && !isMessagesPage && !notif && (
          <>
          Reels
          </>
        )} 
        </Button>
        </Link>
        </Box>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage || notif) ? "50px" : "240px"} mt="17px">
        <Link to="/Messages">
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px">
        <FontAwesomeIcon size='lg'icon={faMessage} style={{ marginRight: '15px' }} />
        {!openSearch && !isMessagesPage &&  !notif &&(
          <>
          Mesajlar
          </>
        )} 
        </Button>
        </Link>
        </Box>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage || notif) ? "50px" : "240px"} mt="17px">
       
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px" onClick={handleNotif} >
        <FontAwesomeIcon size='lg'icon={faHeart} style={{ marginRight: '15px' }} />
        {!openSearch && !isMessagesPage &&  !notif &&(
          <>
          Bildirimler
          </>
        )} 
        </Button>
          
  
        </Box>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage || notif) ? "50px" : "240px"} mt="17px">
        <Link to="/">
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px">
        <FontAwesomeIcon size='lg'icon={faPlus}  style={{ marginRight: '15px' }} />
        {!openSearch && !isMessagesPage &&  !notif &&(
          <>
          Oluştur
          </>
        )} 
        </Button>
        </Link>
        </Box>
        </li>
        <li>
        <HStack ml="10px" width={(openSearch || isMessagesPage || notif ) ? "50px" : "240px"} mt="17px">
        <Link to="/">
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px">
        <Image width="30px" height="25px" src={me} mr="15px" rounded="full"/>
        {!openSearch && !isMessagesPage && !notif &&(
          <>
          Profil
          </>
        )} 
        </Button>
        </Link>
        </HStack>
        </li>
        <li>
        <Box ml="10px" width={(openSearch || isMessagesPage || notif) ? "50px" : "240px"} mt="80px" position="absolute">
        
          <Button width="full"  variant="ghost"  display="flex" justifyContent="left" fontSize="15px" onClick={handleMore}>
        <FontAwesomeIcon size='lg'icon={faBars}  style={{ marginRight: '15px' }}  />
        {!openSearch && !isMessagesPage && !notif && (
          <>
          Daha Fazla
          </>
          
        )} 
        
        </Button>
        {more && (
          <>
           <MotionFlex
           bg="white"
           height="270px"
          
           borderRadius="xl"
           boxShadow="xl"
           textAlign="left"
           width="270px"
           initial={{ opacity: 0, y: -440 }}  
           animate={{
             opacity:  1 , 
             y:  -440     
           }} 
           transition={{ duration: 0.5 }}  
         >
          <Box  width="255px" pt="8px" >
          <ul className={styles.list} >
            <li>
            
                <Link to="/">
              <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex"> <FontAwesomeIcon icon={faBookmark} style={{ marginRight: '10px' }} /> <Text fontSize="15px" fontWeight="light">  Ayarlar</Text> </Button>
              </Link>
           
            </li>
            <li>
            
            <Link to="/">
          <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex"> <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} /> <Text fontSize="15px" fontWeight="light">  Hareketlerin</Text> </Button>
          </Link>
       
        </li>
        <li>
            
            <Link to="/">
          <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex"> <FontAwesomeIcon icon={faFlag} style={{ marginRight: '10px' }} /> <Text fontSize="15px" fontWeight="light">  Kaydedilenler</Text> </Button>
          </Link>
       
        </li>
        <li>
            
            <Link to="/">
          <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex"> <FontAwesomeIcon icon={faSun} style={{ marginRight: '10px' }} /> <Text fontSize="15px" fontWeight="light"> Görünümü değiştir</Text> </Button>
          </Link>
       
        </li>
        <li>
            
            <Link to="/">
          <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex"> <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '10px' }} /> <Text fontSize="15px" fontWeight="light">  Bir sorun bildir</Text> </Button>
          </Link>
       
        </li>

          </ul>
          </Box>
        
      
         <MotionFlex
         bg="white"
         height="120px"
        
         borderRadius="xl"
         boxShadow="xl"
         textAlign="left"
         width="270px"
         initial={{ opacity: 0, y:  +272  ,
          x: -256   }}  
         animate={{
           opacity:  1 , 
           y:  +272  ,
           x: -256
         }} 
         transition={{ duration: 0.5 }} >
      <Box width="270px">
          <ul className={styles.list} >
          
            <li>
            
            <Link to="/">
          <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex">  <Text fontSize="15px" fontWeight="light">  Hesap değiştir</Text> </Button>
          </Link>
       
        </li>
        <Divider borderColor="gray.200" />
        <li>
            
            <Link to="/">
          <Button p="22px" m="5px" tex variant="ghost" size="md" width="260px" justifyContent="left" display="flex">  <Text fontSize="15px" fontWeight="light"> Çıkış Yap</Text> </Button>
          </Link>
       
        </li>
        
          </ul>
          </Box>
          </MotionFlex>
          </MotionFlex>
         </>

          )}
        </Box>
        </li>
      
      </ul>
        
      </Box>
    </Flex>
  
      
   
 </>
  )
}

export default Navbar