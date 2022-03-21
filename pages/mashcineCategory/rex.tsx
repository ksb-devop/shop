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
    Container,
    createIcon,
    Icon,
    Grid,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router'
  import Angebot from '../../componenets/Angebot';

const Rex = ({ index, name, url , imageUrl }: Rex) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter(); 
  
  return (
    <div>
       <Head>
        <title>Rex Royal Kaffeevollautomaten || Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Breadcrumb 
        ml={20} 
        mt={10}
        fontWeight='medium' fontSize='sm'>
        <BreadcrumbItem>
        <BreadcrumbLink href='/maschine'>Büro Maschinen</BreadcrumbLink>
        </BreadcrumbItem>

       <BreadcrumbItem isCurrentPage >
       <BreadcrumbLink href={'/mashcineCategory/jura'}>Rex Royal Kaffeevollautomaten </BreadcrumbLink>
       </BreadcrumbItem>

       </Breadcrumb>


       <Text 
       textAlign={'center'}
       fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
       pb={10}
       pt={5}
       >Rex Royal Kaffeevollautomaten
       </Text>

      <Center py={12}  >
      <Grid
          
          mb={{ base: 10,  lg: 20 }}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={14} w={{ base: '90%', md: '80%', lg: '80%' }}
          >


     {REX_ITEMS.map((rex) => (

      <Box
        key={rex.index}
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
            src={rex.imageUrl}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {rex.brand}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {rex.name}
          </Heading>
          <Button 
           onClick={async () => { 
            router.push(rex.url);
  
            }}
          colorScheme='green'>Mehr Info </Button>
        </Stack>
      </Box>


  ))}

  
</Grid> 
</Center>

<Angebot/>

    </div>
  )
}


const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

interface Rex {
    index?: string;
    children?: Array<Rex>;
    name?: string;
    brand?: string;
    url?: string;
    imageUrl?: string;
  }
  
  const REX_ITEMS: Array<Rex> = [

     
    {
      index: '1',  
      name: 'S2',  
      brand: 'Rex Royal',
      url: '/maschine/rex/s2',
      imageUrl: '/rex/s2/1.jpg',
       
    },
    {
      index: '2',  
      name: 'S300',  
      brand: 'Rex Royal',
      url: '/maschine/rex/s300',
      imageUrl: '/rex/s300/1.jpg',
        
    },
    {
      index: '3', 
      name: 'S500',  
      brand: 'Rex Royal',
      url: '/maschine/rex/s500',
      imageUrl: '/rex/s500/1.jpg',
       
    },
    
    
  ];

export default Rex