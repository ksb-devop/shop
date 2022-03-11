import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Image,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
      <Image  
          backgroundColor={'blackAlpha.600'}
          src='/logo.png' 
          alt='logo' 
          borderRadius={5}
          px={2}
          py={2}
          w={350}  />

     
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Produkt</ListHeader>
              <Link href={'/shop'}>Shop</Link>
              <Link href={'/maschine'}>Büro Maschinen</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'/kaffeeService'}>Kaffee-Sevice</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  Büro
                </Tag>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'/espressoService'}>Espresso-Sevice</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  Büro
                </Tag>
              </Stack>
              
              <Link href={'#'}>Preisgestaltung</Link>
             
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Firma</ListHeader>
              <Link href={'/about'}>Über Uns</Link> 
              <Link href={'/contact'}>Kontakt</Link> 
              <Link href={'#'}>Dokumente</Link>
              <Link href={'#'}>Angebot</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Recht</ListHeader>
              <Link href={'/recht/datenschutz'}>Datenschutz</Link> 
              <Link href={`/recht/agbs`}>AGBs</Link>
              <Link href={'/recht/impressum'}>Impressum</Link>
              <Link href={'/recht/partners'}>Geschäftspartnerschaften</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Folgen Sie Uns </ListHeader>
              <Link href={'#'}>Facebook</Link> 
              <Link href={'#'}>Instagram</Link> 
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Kaffee-Service Berlin Peter Ganss GmbH. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }