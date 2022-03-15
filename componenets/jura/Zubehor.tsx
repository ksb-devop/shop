
import React from 'react'
import Head from 'next/head'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Grid, 
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router'

function JuraZubehör  ({ index, name, url , imageUrl }: Zubehör) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter(); 
  
  return (
    <div>
       

 

      <Center py={12}  >
      <Grid
          
          mb={{ base: 10,  lg: 20 }}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }} gap={14} w={{ base: '90%', md: '100%', lg: '100%' }}
          >


     {ZUBEHÖR_ITEMS.map((zubehör) => (

      <Box
        key={zubehör.index}
        role={'group'}
        p={6}
        maxW={'330px'} 
        w={'full'} 
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'dark-lg'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'} 
          pos={'relative'}
          height={'230px'}
           >
          <Image
            alt='jura'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={zubehör.imageUrl}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {zubehör.brand}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {zubehör.name}
          </Heading>
          <Button 
           onClick={async () => { 
            router.push(zubehör.url);
  
            }}
          colorScheme='green'>Mehr Info </Button>
        </Stack>
      </Box>


  ))}

  
</Grid> 
    </Center>

    </div>
  )
}

interface Zubehör {
    index?: string;
    children?: Array<Zubehör>;
    name?: string;
    brand?: string;
    url?: string;
    imageUrl?: string;
  }
  
  const ZUBEHÖR_ITEMS: Array<Zubehör> = [

     
    {
      index: '1',  
      name: 'Milchkühler Piccolo',  
      brand: 'Jura',
      url: '/',
      imageUrl: '/zubehor/z1.jpg',
       
    },
    {
      index: '2',  
      name: 'Cool Control ',  
      brand: 'Jura',
      url: '/',
      imageUrl: '/zubehor/z2.jpg',
        
    },
    {
      index: '3', 
      name: 'Milchkühler',  
      brand: 'Jura',
      url: '/',
      imageUrl: '/zubehor/z3.jpg',
       
    },
     
    
  ];

export default JuraZubehör