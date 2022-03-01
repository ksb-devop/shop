import { Badge, Box, Image, Text, SimpleGrid, Grid, Stack, styled, Link, Flex } from '@chakra-ui/react'
import React, { useState, useEffect }from 'react'
import styles from '../styles/Home.module.css'
import { getCategories } from '../services';

const Categories = () => {

  


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

 

  return (
    <div className={styles.categoryList} >

{categories.map((categories, index) => (
      <>
        <Box
        as='button'
        maxH={250}
        maxW={250}
        key={index}
        >
        <Link href={`/category/${categories.node.slug}`}  > 
        
        <Text
        textAlign={'center'}
        fontWeight={500}
        my={2}
        borderRadius={5}
        >{categories.node.name}</Text>
        </Link>   
        </Box>
        </>
      ))}
      
     
        
      
         
    </div>
  )
}

export default Categories