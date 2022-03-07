import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function BuroService() {
  return (
    <Box py={12}>
     
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
            <Box 
            w={{ base: '300px', lg: '600px' }}
            h={'100%'}
            >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            Unser Kaffee-Service bieten folgendes  
            </Text>
           
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={6} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Wir stellen Ihnen professionelle Kaffeemaschinen zur Verfügung
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Wir bieten Ihnen eine vielfältige Auswahl an Premium-Kaffeesorten
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Der Kaffee ist in aromageschützten Portionsbeuteln verpackt, so dass ein gleichbleibend 
                guter und frischer Geschmack für jede Tasse Kaffee garantiert ist
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Der Kaffee wird direkt in Pumpkannen gebrüht, die dafür sorgen, 
                dass der Kaffee an jedem Ort über den ganzen Tag hinweg heiß und aromatisch bleibt
              </ListItem>
            </List>
             
          </VStack>
          </Box>
        </PriceWrapper>
 
        <PriceWrapper>
            <Box 
            w={{ base: '300px', lg: '600px' }}
            h={'100%'}
                 >
          <Box   py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            Service & Qualität
            </Text>
             
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={6} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                 Beste Qualität zu stabilen und günstigen Preisen
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Persönlicher Service und zuverlässige Lieferung bis in die Küche
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Vereinbarung von unverbindlichen Verkostungsterminen
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Instandhaltung und Wartung aller von uns zur Verfügung gestellten Maschinen
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Keine Mindestlaufzeiten
              </ListItem>
            </List>
            
          </VStack>
          </Box>
          
        </PriceWrapper>

        
      </Stack>
      
      <VStack  spacing={2} textAlign="center">
        <Heading as="h1" fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
        Kontaktieren Sie uns und <br/> wir machen Ihnen gern ein unverbindliches Angebot!
        </Heading>
        <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Kontakt
            </Button>
      </VStack>


    </Box>
  );
}