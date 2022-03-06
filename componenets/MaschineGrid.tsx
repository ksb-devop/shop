import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {ArrowRightIcon} from '@chakra-ui/icons'
  
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
     
  }
  
  const Feature = ({ text}: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
           >
          
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container  
      boxShadow={'2xl'}
      maxW={{ base: '100%', md: '80%', lg: '80%' }}    
      py={12}   >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

        <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/e.jpg'}
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              BÜRO-Service
            </Text>
            <Heading fontSize={'lg'} > Kaffeeversorgung mit Filterkaffee im Büro und <br/> Espresso-Service &  Kaffeevollautomaten</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Kaufen, Mieten oder Leihen mit Full Service, Sie haben die Wahl.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Link 
              display={'flex'}
               fontSize={'3xl'}
              href='/kaffeeService' >
               
               <Text 
               fontSize={'3xl'}
               fontWeight={'medium'}
               >Kaffee-Service  </Text>
               <ArrowRightIcon w={5} h={5} mt={4} ml={3} />
              </Link>
              <Link 
              display={'flex'}
               fontSize={'3xl'}
              href='/maschine' >
               
               <Text 
               fontSize={'3xl'}
               fontWeight={'medium'}
               >Espresso-Service  </Text>
               <ArrowRightIcon w={5} h={5} mt={4} ml={3} />
              </Link>
               
              
            </Stack>
          </Stack>
          
        </SimpleGrid>
      </Container>
    );
  }