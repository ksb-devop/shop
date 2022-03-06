import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
   
   

  const features = [
    {
      title: 'Welche Kaffeesorte passt am besten zu Ihnen?',
      text:
        "Sie haben die Wahl aus unserem umfangreichem Angebot aus echten italienischen Kaffeebohnen, feinem Filterkaffee und italienischen Kaffeepads - wir kennen und prüfen unsere Sorten genau und bieten Ihnen die Möglichkeit zu probieren, welcher Kaffee Ihren Ansprüchen entspricht.",
      
    },
    {
      title: 'Sie wollen so wenig Aufwand wie möglich? ',
      text:
        "Unsere Techniker installieren Ihnen einen Festwasseranschluss, Kaffeesatzabwurf und Restwasserablaufset. Wir rufen Sie in regelmäßigen Abständen an und sorgen dafür, dass Sie Ihre Kaffeebestellung nicht versäumen können. ",
      
    },
    {
      title: 'Kaufen, mieten oder leasen? ',
      text:
        "Ihren neuen Kaffeevollautomat können sie ganz einfach bei uns finanzieren.",
       
    },
    {
        title: 'Kaffeelieferung bis in Ihre Küche',
        text:
          "Ihre Kaffeelieferung bringt Ihnen unser Kundenbetreuer bis in Ihre Küche.",
         
      },
  ];
  
  export default function GridListWithHeading() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Beim Kaffee-Service Berlin...</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
          Ihre Bestellungen, Fragen und Wünsche bearbeiten wir umgehend und finden
           die passende Lösung. Um die Installation, Programmierung, sowie regelmäßige
            Wartung, Überprüfung und Entkalkung der Geräte brauchen Sie sich nicht zu 
            kümmern. Das übernehmen wir gern für Sie.
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }