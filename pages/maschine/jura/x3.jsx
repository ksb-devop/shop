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
    IconButton, 
    Container, 
    chakra,     
    Divider,
    VStack,  
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, 
    ListIcon,
    OrderedList,
    UnorderedList,
    Tabs, TabList, TabPanels, Tab, TabPanel, 
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router';
  import Head from 'next/head'; 
  import { saveAs } from "file-saver";

  import {
    
    CloseIcon,
    StarIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';



  // Here we have used react-icons package for the icons
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import Jura from '../../mashcineCategory/jura';

import JuraZubehör from '../../../componenets/jura/Zubehor';

import UberService from '../../../componenets/UberService'





// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState('Slider');
  
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
  
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
      { 
        image:
          '/jura/x3/1.jpg',
      },
      {
         
        image:
        '/jura/x3/2.jpg',
      },
      {
        
        image:
        '/jura/x3/3.jpg',
      },
      {
        
        image:
        '/jura/x3/4.jpg',
      },
      {
        
        image:
        '/jura/x3/5.jpg',
      },
      {
        
        image:
        '/jura/x3/6.jpg',
      },
    ];
  
    return (
      <Box
        position={'relative'}
        mt={0}
        height={'100%'}
        width={'100%'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={30}
          top={250}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <ArrowLeftIcon size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={30}
          top={250}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <ArrowRightIcon size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index} 
              h={500}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize={'contain'}
              backgroundImage={`url(${card.image})`}>
             
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }

const x3 = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const saveFile = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Anleitung.pdf",
      "Jura_GIGA_X3_Anleitung.pdf"
    );
  };
  const saveFile1 = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Entkalken.pdf",
      "Jura_GIGA_X3_Entkalken.pdf"
    );
  };
  const saveFile2 = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Filter_wechseln.pdf",
      "Jura_GIGA_X3_Filter_wechseln.pdf"
    );
  };
  const saveFile3 = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Geraet_Reinigen.pdf",
      "Jura_GIGA_X3_Geraet_Reinigen.pdf"
    );
  };
  const saveFile4 = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Milchsystem_reinigen.pdf",
      "Jura_GIGA_X3_Milchsystem_reinigen.pdf"
    );
  };
  const saveFile5 = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Produktblatt.pdf",
      "Jura_GIGA_X3_Produktblatt.pdf"
    );
  };
  const saveFile6 = () => {
    saveAs(
      "/jura/x3/pdf/Jura_GIGA_X3_Technische_Dokumentation.pdf",
      "Jura_GIGA_X3_Technische_Dokumentation.pdf"
    );
  };
  
  return (
    <div> 

      <Head>
        <title>Giga X3 || Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Box 
       top={170}
       left={100}
       position={'absolute'}
          >
          <Breadcrumb fontWeight='medium' fontSize='sm'> 

  <BreadcrumbItem>
    <BreadcrumbLink href='/maschine'>Büro Maschinen</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='/mashcineCategory/jura'>Jura Kaffeevollautomaten</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Giga X3 </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

          </Box>
        <Container maxW={'7xl'}>

        
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex  
        my={10}
        borderRadius={10}
        boxShadow={'dark-lg'}
        w={'80%'} >
          <CaptionCarousel
            rounded={'md'}
            alt={'maschine image'} 
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '100%' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Giga X3
            </Heading>
            <Text
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Jura
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                // eslint-disable-next-line react-hooks/rules-of-hooks
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Mit der GIGA X3 beweist JURA eindrücklich Schweizer Innovationskraft und Professionalität bis ins kleinste Detail. Überall,
       wo Kapazitäten bis zu 150 Tassen an der Tagesordnung sind, überzeugt sie mit Qualität, Funktionalität und Zuverlässigkeit.
        Gepaart mit Höchstleistung in allen Belangen resultiert ein Hightech-Vollautomat, der ideal auf die Anforderungen von Großbüros, 
        dem Frühstücks-, Seminar- und Tagungsbereich sowie Selbstbedienungszonen zugeschnitten ist.
              </Text>
               
            </VStack>
             
            
          </Stack>
 
        </Stack>
      </SimpleGrid>

<Box>
<Tabs isFitted variant='enclosed'>
  <TabList   mb='1em'>
    <Tab>Vorzüge</Tab>
    <Tab>Technische Übersicht</Tab>
    <Tab>Unseren Service</Tab> 
    <Tab>Zubehör</Tab> 
    <Tab>Dokumente</Tab> 
  </TabList>
  <TabPanels>
    <TabPanel>
      <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={14} w={'100%'}  >
      <Image
            p={6}
            w={'800px'}
            alt={'Login Image'}
            objectFit={'contain'}
            src={'/jura/x3/4.jpg'}
          />
      <Text fontSize={20} p={30} textAlign={'center'} mt={'80px'} 
      >Die GIGA X3 hat’s in sich: Das Hochleistungs-Keramikscheibenmahlwerk liefert zuverlässig über Jahre 
      eine präzise, konstant gleichmäßige Mahlung. Dafür sorgt eine Top-Innovation: A.G.A. (Automatic Grinder Adjustment) – 
      die elektronisch gesteuerte, automatische Nachjustierung. Der Puls-Extraktionsprozess (P.E.P.®) optimiert die Extraktionszeit
       für kurze Spezialitäten und CLARIS Pro Smart in Kombination mit dem Intelligent Water System (I.W.S.)
        liefert perfekte Wasserqualität für puren Geschmack.
   </Text>

   

   <Text fontSize={20} p={30}  textAlign={'center'} mt={'80px'} 
      >Als einzelner Vollautomat genauso, wie mit passenden Peripheriegeräten wie Tassenwärmer, Abrechnungssystem, etc. erweitert, 
      auf Basis der GIGA X3 lässt sich für jedes Einsatzgebiet die ideale Kaffee-Komplettlösung konfigurieren. Bei Bedarf wächst
       sie auch bequem mit steigenden Anforderungen mit.
   </Text>
   <Image
            p={6}
            w={'950px'}
            alt={'Login Image'}
            objectFit={'contain'}
            src={'/jura/x3/2.jpg'}
          />

    </Grid>
    </TabPanel>

    <TabPanel>
       <Box py={12} >
       <List   
       fontSize={'lg'} spacing={4}>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Bis zu 32 individuell   programmierbare Spezialitäten
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Hohe Kapazität: 1 kg Bohnenbehälter minimaler Aufwand beim Befüllen
5 Liter Wassertank Gerät immer flexibel und mobil einsetzbar.
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    150 Tassen pro Tag (365 Tage im Jahr)
  </ListItem> 
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Bereiten Sie gleichzeitig 1-2 Tassen oder ein Kännchen (360ml) dank der Bypass-Funktion in High-Speed zu
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Einfach bedienbar: Individuell programmierbares Touch-Farbbildschirm
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Professionelle Kaffeezubereitung: Keramik-Mahlwerk für schnelle, präzise, homogene, konstant gleichmäßige Mahlung, <br/> sowie zwei Heizsysteme, zwei Pumpen und zwei Fluidsysteme
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    Verbesserte Reinigungsprogramme garantiert einen geringen Pflegeaufwand
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon} color='green.500' />
    496x320x550mm (LxBxH), 19kg, 220-240V, 2300W
  </ListItem>
</List>
       </Box>
    </TabPanel>

    <TabPanel>
    <Box py={12} >
     <UberService/>
       </Box>
    </TabPanel>

    <TabPanel>
    <Box py={12} >
     <JuraZubehör/>
       </Box> 
     
   </TabPanel>

   <TabPanel  >
     <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Anleitung PDF</Text>
     <a href='/jura/x3/pdf/Jura_GIGA_X3_Anleitung.pdf' target="_blank"  >
    <Button mx={2} >Open </Button> 
    </a>
    <Button float={'right'} onClick={saveFile} >Download </Button>
    
   </Stack> 
   <Divider orientation='horizontal' p={2} />
    <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Entkalken PDF</Text>
    <Button onClick={saveFile1} >Download </Button> 
    
    </Stack> 
    <Divider orientation='horizontal'  p={2} />
    <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Filter-wechseln PDF</Text>
    <Button onClick={saveFile2} >Download </Button>
    </Stack> 
    <Divider orientation='horizontal'  p={2} />
    <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Geraet-Reinigen PDF</Text>
    <Button onClick={saveFile3} >Download </Button>
    </Stack> 
    <Divider orientation='horizontal'  p={2} />
    <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Milchsystem-reinigen PDF</Text>
    <Button onClick={saveFile4} >Download </Button>
    </Stack> 
    <Divider orientation='horizontal'  p={2} />
    <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Produktblatt PDF</Text>
    <Button onClick={saveFile5} >Download </Button>
    </Stack> 
    <Divider orientation='horizontal'  p={2} />
    <Stack flexDirection={'row'} alignItems={'center'}  >
     <Text fontSize={'2xl'} px={10} >Jura GIGA X3 Technische-Dokumentation PDF</Text>
    <Button onClick={saveFile6} >Download </Button>
    </Stack> 
    <Divider orientation='horizontal'  p={2}  />
     
   </TabPanel>
  </TabPanels>

  
</Tabs>
</Box>

    </Container>
    <Jura/>
    </div>
  )
}

export default x3