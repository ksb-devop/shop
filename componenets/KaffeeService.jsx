import React from 'react'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    ListItem,
    List,
    ListIcon,
  } from '@chakra-ui/react';

  import {MdCheckCircle, StarIcon , SunIcon} from '@chakra-ui/icons'

const KaffeeService = () => {
  return (
    <div>
        
        <Center my={10} py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '40rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/kaffeeservice/ks1.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} >
          <Image
          alt=''
            objectFit="contain"
            opacity={0.9}
            boxSize="100%"
            src={ '/kaffeeservice/ks1.jpg'}
          />
        </Flex>
        <Stack
          bg={useColorModeValue('white', 'gray.900')}
          opacity={0.9}
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={8}
          p={{ base: 2, md: 4, lg: 6 }}
          >
          <Heading fontSize={'3xl'} pb={5} >
          Die Filterkaffeemaschine
          </Heading>

          <List  
          spacing={5}>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Ergonomische Eingussöffnung vorne mit Sieb
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Betriebskontrollleuchte: Immer wissen was los ist. Eine LED zeigt den Wasserstand vom Tank an. Dadurch keine Doppelbefüllung mehr
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Ein-/Ausschalter mit Kontrollleuchte
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Patentierte Entkalkungsanzeige für immer gute Wasserqualität
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Sauber und hygienisch: die Edelstahlfilterpfanne mit dem Handgriff
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Zuverlässig dank elektronischer Steuerung
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Edelstahldurchlauferhitzer für eine optimale Brühtemperatur von ca. 94 °C
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Brühzeit: 7 Minuten, Stundenleistung: ca. 18 Liter
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Anschluss: 230V, 2015W, Maße: 215 x 353 x 618 mm
            </ListItem>
          </List>

           
        </Stack>
      </Stack>
    </Center>


    <Center mb={20}  py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '40rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/kaffeeservice/ks2.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        padding={4}>
        
        <Stack
          bg={useColorModeValue('white', 'gray.900')}
          opacity={0.9}
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={8}
          p={{ base: 2, md: 4, lg: 6 }}
          >
          <Heading fontSize={'3xl'} pb={5} >
          Die Isolierkanne
          </Heading>

          <List  
          spacing={5}>
            <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Stabiler Metallpumphebel
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Hochleistungspumpsystem: Mit einem Druck eine Tasse füllen
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Steig- und Mischrohr in einem: patentiertes Doppelrohr, verbleibt beim Brühen in der Kanne, dadurch ist kein manuelles Umrühren notwendig
  </ListItem>
   
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Einfaches und bequemes Handling durch den Tragegriff
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Optimale Wärme- und Produktkonservierung durch beste Isolationseigenschaften des Edelstahlinnenzylinders. Kein Glasbruch mehr
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Einfach zu drehen durch den Drehteller. Optional erhältlich das praktische Tropfblech
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Stoßvorrat: 2,2 Liter
  </ListItem>
          </List>

           
        </Stack>

        <Flex flex={1} >
          <Image
          alt=''
            objectFit="contain"
            opacity={0.9}
            boxSize="100%"
            src={ '/kaffeeservice/ks2.jpg'}
          />
        </Flex>

      </Stack>
    </Center>
 

    </div>
  )
}

export default KaffeeService