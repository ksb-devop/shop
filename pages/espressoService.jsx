import React from 'react'
import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Box,
    Grid,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router';
  import Head from 'next/head'; 


const espressoService = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();


  return (
    <div>

      <Head>
        <title>
Espresso-Service || Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Center>
        <Stack
        my={{ base: 10, md: 20, lg: 20 }}
        mx={{ base: 10, md: 20, lg: 20 }}
        minH={'60vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                // eslint-disable-next-line react-hooks/rules-of-hooks
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
              Espresso-Service &
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
             Kaffeevollautomaten
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Nach langjähriger Erfahrung in der Kaffeeversorgung am Arbeitsplatz, haben wir für jedes Büro die passende 
          Lösung. Sie wünschen sich z.B. italienischen Espresso, leckeren Cappuccino oder einen cremigen Latte Macchiato
           im Büro? Mit unserem professionellen Kaffeevollautomaten gelingen Ihnen Kaffeespezialitäten wie im italienischen Bistro.
            Ob kleines Start-Up, Werkstatt, Betrieb oder Großraumbüro, mit uns haben sie einen verlässlichen Kaffeepartner an Ihrer Seite
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
            onClick={async () => { 
                router.push('/contact');
      
                }}
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.700',
              }}>
              Kontakt
            </Button> 
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={ '/es.jpg'}
        />
      </Flex>
    </Stack>
    
    </Center>

    <Box 
        width={{ base: '90%', md: '90%', lg: '90%' }}
        my={'90px'}
        px={{ base: 10, md: 0, lg: 20 }}
        pb={{ base: 10, md: 10, lg: 20 }}
        borderRadius={10}  > 
      
        

        <Center  >
          <Grid
          ml={36}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={14} w={'100%'} 
          >
      
       
             

       <Box 
       boxShadow={'dark-lg'}
        backgroundImage={'/espressoService/em.jpg'}
        backgroundSize='cover'
        as='button'
        h={{ base: 140, md: 250, lg: 280 }}
        w={{ base: '100%', md: '100%', lg: '100%' }}
         
        borderRadius={10}
        onClick={async () => { 
          router.push('/mashcineCategory/padmashine');

          }}
        >
         
         
        <Text
        textAlign={'center'}
        backgroundColor={'white'}
        opacity={'0.9'}
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        fontWeight={'semibold'}
        my={2}
        borderRadius={5}
        >Espresso-Pad-Maschine</Text>
          
        </Box>

        <Box 
       boxShadow={'dark-lg'}
        backgroundImage={'/espressoService/jm5.jpg'}
        backgroundSize='cover'
        as='button'
        h={{ base: 140, md: 250, lg: 280 }}
        w={{ base: '100%', md: '100%', lg: '100%' }}
         
        borderRadius={10}
        onClick={async () => { 
          router.push('/mashcineCategory/jura');

          }}
        >
         
         
        <Text
        textAlign={'center'}
        backgroundColor={'white'}
        opacity={'0.9'}
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        fontWeight={'semibold'}
        my={2}
        borderRadius={5}
        >JURA VOLLAUTOMATEN</Text>
          
        </Box>
         
        <Box 
       boxShadow={'dark-lg'}
        backgroundImage={'/espressoService/km2.jpg'}
        backgroundSize='cover'
        as='button'
        h={{ base: 140, md: 250, lg: 280 }}
        w={{ base: '100%', md: '100%', lg: '100%' }}
         
        borderRadius={10}
        onClick={async () => { 
          router.push('/mashcineCategory/padmashine');

          }}
        >
         
         
        <Text
        textAlign={'center'}
        backgroundColor={'white'}
        opacity={'0.9'}
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        fontWeight={'semibold'}
        my={2}
        borderRadius={5}
        >REX ROYAL VOLLAUTOMATEN</Text>
          
        </Box>
         
        <Box 
       boxShadow={'dark-lg'}
        backgroundImage={'/espressoService/tm.jpg'}
        backgroundSize='cover'
        as='button'
        h={{ base: 140, md: 250, lg: 280 }}
        w={{ base: '100%', md: '100%', lg: '100%' }}
         
        borderRadius={10}
        onClick={async () => { 
          router.push(`/`);

          }}
        >
         
         
        <Text
        textAlign={'center'}
        backgroundColor={'white'}
        opacity={'0.9'}
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        fontWeight={'semibold'}
        my={2}
        borderRadius={5}
        >TABLE TOP
        </Text>
          
        </Box>
         
         
        
        </Grid>
        </Center>
    
    </Box>


    </div>
  )
}

export default espressoService