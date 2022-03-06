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
        
        <Center py={6}>
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


    <Center py={6}>
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
            objectFit="contain"
            opacity={0.9}
            boxSize="100%"
            src={ '/kaffeeservice/ks2.jpg'}
          />
        </Flex>

      </Stack>
    </Center>

    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '40rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/kaffeeservice/ks3.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        p={{ base: 2, md: 4, lg: 6 }}
        >
        <Flex flex={1} >
          <Image
            objectFit="contain"
            opacity={0.9}
            boxSize="100%"
            src={ '/kaffeeservice/ks3.jpg'}
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
          py={4}>
          <Heading fontSize={'2xl'} pb={5} >
          Melitta 170M Glaskannenmaschine
          </Heading>

          <List  
          spacing={5}>
            <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Die professionelle Kaffeemaschine im Edelstahlgehäuse mit Isolierkanne
  </ListItem>                    
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Ein Brühvorgang für 14 Tassen in 6,5 Minuten – Kapazität für bis zu 125 Kaffeetassen pro Stunde
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Direkt die 1,85l Isolierkanne mit Schraubverschluss oder die 2.2l Pumpkanne mit der Maschine befüllen – kein Umgießen notwendig
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Mit klassischem Pyramidenfilter für beste Aromaentfaltung auch bei kleinen Mengen
  </ListItem>
  
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Aktueller Status dank beleuchteter Tastenschalter immer sichtbar
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Bequemes Einfüllen des Wassers an der Gerätevorderseite. Kein Wasseranschluss erforderlich
  </ListItem>
   
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Die Wartung und Entkalkung übernehmen wir für Sie
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Anschluss: 230V, 1810 Watt, Maße (BxTxH): 210 x 420 x 601 mm, 7 kg
  </ListItem>
          </List>

           
        </Stack>
      </Stack>
    </Center>

    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '40rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/kaffeeservice/ks4.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        p={{ base: 2, md: 4, lg: 6 }}
        >
        
        <Stack
          bg={useColorModeValue('white', 'gray.900')}
          opacity={0.9}
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={8}
          py={4}>
          <Heading fontSize={'2xl'} pb={5} >
          Melitta 170MT Thermoskannenmaschine
          </Heading>

          <List  
          spacing={5}>
         <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Ergonomische Eingussöffnung vorne mit Sieb
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Betriebskontrollleuchte: Immer wissen was los ist. Eine LED zeigt den Wasserstand vom Tank an. Dadurch keine Doppelbefüllung mehr
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Ein-/Ausschalter mit Kontrollleuchte
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Patentierte Entkalkungsanzeige für immer gute Wasserqualität 
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Sauber und hygienisch: die Edelstahlfilterpfanne mit dem Handgriff 
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Zuverlässig dank elektronischer Steuerung 
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Edelstahldurchlauferhitzer für eine optimale Brühtemperatur von ca. 94 °C 
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Brühzeit: 7 Minuten, Stundenleistung: ca. 18 Liter 
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Anschluss: 230V, 2015W, Maße: 215 x 353 x 618 mm 
  </ListItem>
          </List>

           
        </Stack>

        <Flex flex={1} >
          <Image
            objectFit="contain"
            opacity={0.9}
            boxSize="100%"
            src={ '/kaffeeservice/ks4.jpg'}
          />
        </Flex>

      </Stack>
    </Center>

    </div>
  )
}

export default KaffeeService