import React from 'react'
import Head from 'next/head'
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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react';

  import {MdCheckCircle, StarIcon , SunIcon} from '@chakra-ui/icons'

const padmashine = () => {
  return (
    <div>

      <Head>
        <title>Espresso-Pad-Maschine || Kaffee-Service Berlin Peter Ganss GmbH</title>
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
       <BreadcrumbLink href={'/mashcineCategory/padmashine'}>Espresso-Pad-Maschine </BreadcrumbLink>
       </BreadcrumbItem>


     
      </Breadcrumb>

        <Center my={10} py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '50rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/maschine/pm1.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} >
          <Image
          alt=''
          opacity={0.95}
            objectFit="contain" 
            boxSize="100%"
            src={'/maschine/pm1.jpg'}
          />
        </Flex>
        <Stack
          // eslint-disable-next-line react-hooks/rules-of-hooks
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
          BLITZ für Espresso & Cappuccino
          </Heading>

          <Text fontSize={'lg'} fontWeight={'500'} >
          Die Blitz Coffee & Cappuccino ist eine professionelle Espresso- und Kaffee-Pad-Maschine von Tecnosystem, hergestellt in Italien. 
          Sie können mit ihr auf einfache Weise einen italienischen Espresso, Cappuccino oder Latte Macchiato zubereiten. Die Blitz ist die
           ideale Lösung für ihr Büro, Café oder ihre Firma, denn die Technik ist einfach, robust und äußerst solide. Die Handhabung ist 
           einfach und kann von allen Mitarbeitern selbst durchgeführt werden.
          </Text>

          <List  
          spacing={5}>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Zubereitung von echtem italienischem Espresso mit den praktischen und sauberen vorportionierten Profi-Espresso-Pads
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Heißwasserausgabe mit perfekter Temperatur für Tee, Kräutertee und Heiße Schokolade bzw. Cacao
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Heißwasser-Durchlauferhitzer mit 1000 W Leistung
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Separater 1000 cm³ große Dampfkessel mit 1200 W Leistung sichert hohe Dampferzeugung für die Zubereitung von cremigen Cappuccinos
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Separate Dampflanze und Cappucinatore mit Drehknopf-Dosierung
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Großer 5l Wassertank mit Wasserstand-Warnung
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Einfache Reinigung und Pflege für maximale Hygiene
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Technische Daten: BxTxH: 32x41x40cm, 220V, 1300W
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
        height={{ sm: '476px', md: '46rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/maschine/pm2.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        padding={4}>
        
        <Stack
          // eslint-disable-next-line react-hooks/rules-of-hooks
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
          Cecilia Espressopadmaschine
          </Heading>

          <Text fontSize={'lg'} fontWeight={'500'} >
          Die Cecilia ist die ideale Lösung für ihr Büro, Café oder ihre Firma, denn die Technik der Cecilia - Maschine ist einfach, robust und äußerst solide.
          </Text>

          <List  
          spacing={5}>
            <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Zubereitung eines original italienischen Espresso, Cappuccino, Latte Macchiato oder auch Kaffee- lassen Sie sich von unseren Kaffeespezialitäten inspirieren.
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Maximale Sauberkeit und Hygiene
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Ein 3 Liter Dampfkessel ermöglicht schnelles Aufschäumen von großen Mengen an Milch
  </ListItem>
   
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Einfachste Bedienung
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Optisch ein Hingucker
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Vielfalt mit einer Maschine: Espressopad, Kaffeepad, entkoffeiniertes Pad, Bioespressopad
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Mit Sicherheitsthermostat und 5 Liter Wasserbehälter
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Mit Cappucinatore oder Dampflanze lieferbar
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Technische Daten: 295 x 450 x 420 mm (BxTxH), 18,5kg , 230V, 2000 Watt
  </ListItem>
          </List>

           
        </Stack>

        <Flex flex={1} >
          <Image
          alt=''
            objectFit="contain"
            opacity={0.9}
            boxSize="100%"
            src={'/maschine/pm2.jpg'}
          />
        </Flex>

      </Stack>
    </Center>

    <Center my={10} py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '70%' }}
        height={{ sm: '476px', md: '40rem' }}
        direction={{ base: 'column', md: 'row' }}
        backgroundImage={'/maschine/pm3.jpg'} 
        backgroundSize={'cover'}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} >
          <Image
          alt=''
          opacity={0.95}
            objectFit="contain" 
            boxSize="100%"
            src={'/maschine/pm3.jpg'}
          />
        </Flex>
        <Stack
          // eslint-disable-next-line react-hooks/rules-of-hooks
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
          FROG Espressopadmaschine 
          </Heading>

          <Text fontSize={'lg'} fontWeight={'500'} >
          In Italien ist diese Semi-Profi Pad-Maschine bei Espressoliebhabern sehr beliebt. Sie ist nicht nur praktisch und schick, sondern auch besonders energie- und platzsparend.
          </Text>

          <List  
          spacing={5}>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Super leichte Bedienung
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Einfache Pflege zeitsparend und unkompliziert
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              In vielen Farben passend zu ihrer Einrichtung erhältlich
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              In den Wassertank kann eine 1,5 l Wasserflasche hineingestellt werden. Der Vorteil: 
              wenn Sie Mineralwasser mit geringem Kalziuminhalt verwenden, verlängert sich die Lebensdauer der Maschine erheblich.
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Durch den neuartigen Oberdruck erhalten Sie immer einen gleichbleibend perfekten
               Espresso mit einer schönen konsistenten Crema, wie man das beim „Italiener“ erwartet.
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} color="green.400" />
              Technische Daten: 220 x 320 x 400 mm (BxTxH), 6,5kg , 230V, 650 Watt
            </ListItem>
           
         
          </List>

           
        </Stack>
      </Stack>
    </Center>
 
    </div>
  )
}

export default padmashine