import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue, HStack, VStack, Text
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  const features = [
    {
      id: 1,
      title: 'Welche Kaffeesorte passt am besten zu Ihnen?',
      text:
        "Sie haben die Wahl aus unserem umfangreichem Angebot aus echten italienischen Kaffeebohnen, feinem Filterkaffee und italienischen Kaffeepads - wir kennen und prüfen unsere Sorten genau und bieten Ihnen die Möglichkeit zu probieren, welcher Kaffee Ihren Ansprüchen entspricht.",
      
    },
    {
      id: 2,
      title: 'Sie wollen so wenig Aufwand wie möglich? ',
      text:
        "Unsere Techniker installieren Ihnen einen Festwasseranschluss, Kaffeesatzabwurf und Restwasserablaufset. Wir rufen Sie in regelmäßigen Abständen an und sorgen dafür, dass Sie Ihre Kaffeebestellung nicht versäumen können. ",
      
    },
    {
      id: 3,
      title: 'Kaufen, mieten oder leasen? ',
      text:
        "Ihren neuen Kaffeevollautomat können sie ganz einfach bei uns finanzieren.",
       
    },
    {
      id: 4,
        title: 'Kaffeelieferung bis in Ihre Küche',
        text:
          "Ihre Kaffeelieferung bringt Ihnen unser Kundenbetreuer bis in Ihre Küche.",
         
      },
  ];
  
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  
  interface TestimonialCardProps {
    title: string;
    text: string;

    id: number;
  }
  
  function TestmonialCard(props: TestimonialCardProps) {
    const {   title, text,   id,   } = props;
    return (
    
      <Flex
        
        boxShadow={'lg'}
        maxW={{ base: '100%', md: '100%', lg: '100%' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={{ base: 4, md: 10, lg: 10 }}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0, 
        }}>
        <Flex
          direction={'column'}
          textAlign={{ base: 'left', md: 'left', lg: 'left' }}
          justifyContent={'space-between'}>
            
            <HStack key={id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{ title}</Text>
                  <Text fontSize={{ base: 'sm', md: '2xl', lg: '2xl' }} color={'gray.600'}>{ text}</Text>
                </VStack>
              </HStack>
           
           
        </Flex>
       
      </Flex>
      
    );
  }
  
  export default function GridBlurredBackdrop() {
    return (
      <Box  boxShadow={'base'} px={10} 
      width={{ base: '100%', md: '80%', lg: '80%' }}
      >
      <Flex
        textAlign={'center'}
        py={12}  
        justifyContent={'center'}
        direction={'column'}
        >
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
           
          <chakra.h1
            
            fontSize={{ base: '2xl', sm: '4xl', lg: '4xl' }}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Beim Kaffee-Service Berlin...
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'100%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            Ihre Bestellungen, Fragen und Wünsche bearbeiten wir umgehend und finden
           die passende Lösung. Um die Installation, Programmierung, sowie regelmäßige
            Wartung, Überprüfung und Entkalkung der Geräte brauchen Sie sich nicht zu 
            kümmern. Das übernehmen wir gern für Sie.
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {features.map((cardInfo, index) => (
            <TestmonialCard {...cardInfo}   key={index} />
          ))}
        </SimpleGrid>
       
      </Flex>
      </Box>
    );
  }