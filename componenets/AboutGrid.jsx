import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Center,
    Link,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { useRouter } from 'next/router';
  
  export default function AboutGrid() {

    const router = useRouter();

    return (
      <>
       

<Flex
my={20}
w={{ base: '100%' , md: '110%' }}
h={{ base: '100%' , md: '100%' }}
backgroundImage={'/ap.jpg'}
backgroundSize={'cover'}
backgroundPosition={'center center'}>




  <Center>
  <Stack 
  textAlign={'center'}
  backgroundColor={'black'}
  h={{ base: '90%', sm: '70%', md: '70%' }} 
  p={5}
  opacity={0.7}
  borderRadius={10} 
  m={{ base: '5%', sm: '10%', md: '10%' }} 
   align={'flex-start'} spacing={3}>
     <Center alignSelf={'center'}   >
    <Image  
          src='/logo.png' 
          alt='logo'  
          borderRadius={5}
          px={5}
          py={4}
          w={{ base: 500, sm: 550, md: 600 }}  />

    </Center>     

    <Text
      color={'white'}
      fontWeight={400}
      lineHeight={1.2}
      fontSize={{ base: 'x-small', sm: '2xl', md: '2xl' }}
      >
     Wir sind Ihr Partner im Bereich Kaffee- und Wasserversorgung am Arbeitsplatz, im Büro, 
            im Handwerksbetrieb, auf der Messe und zu Konferenzen ebenso wie für den Filmdreh. Höchste 
            Qualität der Produkte, stabile Preise, sowie ein Service, der keine Wünsche offen lässt. Wir 
            finden die perfekt passende Lösung für Sie: professionell, flexibel und unkompliziert!
    </Text>

    <Stack alignSelf={'center'}  wrap={'wrap'} rowGap={5} direction={{ base: 'column', md: 'row' }} spacing={{ base: 2, sm: 4, md: 4 }}>
             
             <Button
                 size={'md'}
                 onClick={async () => { 
                  router.push('/shop');
    
                  }}
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Kaffee-Shop
              </Button>
             
              <Button  
              
               size={'md'}
               onClick={async () => { 
                router.push('/about');
  
                }}
              rounded={'full'}>Kontakt</Button>
 
              <Button 
                size={'md'}
               onClick={async () => { 
                router.push('/service');
  
                }}
              rounded={'full'}>Über Unseren Service</Button> 

              
            </Stack>
     
  </Stack>
  </Center>

</Flex>
</>
    );
  }