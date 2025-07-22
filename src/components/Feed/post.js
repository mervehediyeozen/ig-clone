import React, { useState, useEffect, useRef } from 'react';
import { Box , Flex , Image  , HStack} from '@chakra-ui/react';
import me from '../../images/me.jpeg'
import styles from './styles.module.css'

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  // Bu, kaydırma bittiğinde çalışacak
  const loadMorePosts = () => {
    if (loading) return;
    setLoading(true);

    // Simülasyon: Verileri çekiyoruz, burada API'den veri çekebilirsiniz
    setTimeout(() => {
      setPosts(prevPosts => [
        ...prevPosts,
        { id: prevPosts.length + 1, content: `Video ${prevPosts.length + 1}` }
      ]);
      setLoading(false);
    }, 1500); // 1.5 saniye gecikmeli yeni postlar eklenecek
  };

  useEffect(() => {
    // İlk başta bazı içerikler yükle
    loadMorePosts();
  }, []);

  // Intersection Observer kullanarak kaydırma sonunu tespit ediyoruz
  const lastPostRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    const loadMoreObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMorePosts();
      }
    }, options);

    if (lastPostRef.current) {
      loadMoreObserver.observe(lastPostRef.current);
    }

    return () => {
      if (lastPostRef.current) {
        loadMoreObserver.unobserve(lastPostRef.current);
      }
    };
  }, [loading]);

  return (
    <div>
      {posts.map((post, index) => (
        <>
        <HStack Flex key={post.id} ref={index === posts.length - 1 ? lastPostRef : null}  direction="row">
          <Box  width="300px" height="300px" className={styles.video} >
          <iframe 
              width="100%" 
              height="300" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            </Box>
            <Box  width="300px" height="300px"  >
            <Image src={me} width="100%" height="100%" />
            </Box>
            
            
       
          <HStack key={post.id} ref={index === posts.length - 1 ? lastPostRef : null}  direction="row" > 
          <Box  width="380px" height="500px" className={styles.video} >
         
            <Image src={me} width="100%" height="100%" />
            </Box>
           
            
        </HStack>
        </HStack>
        </>
      ))}

      {loading && <p>Yükleniyor...</p>}
    </div>
  );
}

export default Post;
