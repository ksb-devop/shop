import { Badge, Box, Image, Text, SimpleGrid, Grid, Stack, styled, Link, Flex } from '@chakra-ui/react'
import React, { useState, useEffect }from 'react'
import styles from '../styles/Home.module.css'
import { getCategories } from '../services';
import { useRouter } from 'next/router'

const Categories = () => {

  
  const router = useRouter();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

 

  return (
    <div  >
      <Box  
      maxW={'300px'}
      flexDirection={'column'}
      boxShadow={'dark-lg'}
      p={8}
      borderRadius={5}
      mt={'120px'}
      ml={{ base: 3, md: 10 }}
      display={'flex'}  >

{categories.map((categories, index) => (
       
        <Box
        as='button' 
        key={categories.node.slug}
        onClick={async () => { 
          router.push(`/category/${categories.node.slug}`);

          }}
        >
        
        
        <Text
        textAlign={'center'}
        fontWeight={500}
        my={2}
        
        borderRadius={5}
        >{categories.node.name}</Text>
           
        </Box>
         
      ))}
      
     
        
      </Box>
         
    </div>
  )
}

export default Categories