import { Box, Flex, Heading } from '@chakra-ui/react'
 

export default function StatGrid({
  
}) {
   

  return (
    <Box w="100%"  mt={12} bg="gray.50" pt={[12, 16]}>
     
        <Box 
         mx="auto" px={[4, 6, null, 8]}>
          <Box maxW="4xl" mx="auto" textAlign="center">
            
              <Heading
                as="h2"
                fontSize={['3xl', '4xl']}
                fontWeight="bold"
                color="gray.900"
              >
                Warum Kaffee-Service Berlin?
              </Heading>
            
              <Box mt={[3, 4]} mx="auto" className="prose prose-xl">
              Es gibt mehrere Gründe, warum sich Menschen in Deutschland für die Kaffee-Service Berlin entscheiden. Hier sind 3 von ihnen.
              </Box>
             
          </Box>
        </Box>
    
      <Box mt={10} pb={[12, 16]} bg="white">
        <Box pos="relative">
          <Box pos="absolute" inset="0" h="50%" bg="gray.50"></Box>
          <Box pos="relative" maxW="7xl" mx="auto" px={[4, 6, null, 8]}>
            <Box maxW="100%" mx="auto">
              <Box
                as="dl"
                borderRadius="lg"
                bg="white"
                boxShadow="lg"
                display={{ sm: 'grid' }}
                gridTemplateColumns={{ sm: 'repeat(3, 1fr)' }}
              >
                
                    <Flex
                      
                      flexDirection="column"
                      borderColor="gray.100"
                      p={6}
                      textAlign="center"
                      borderBottomWidth={ '1px'  }
                      borderRightWidth={ '1px'}
                    >
                      <Box
                        as="dt"
                        order="2"
                        mt={2}
                        fontSize="lg"
                        lineHeight="6"
                        fontWeight="medium"
                        color="gray.500"
                      > bis in Ihre Küche
                      </Box>
                      <Box
                        as="dd"
                        order="1"
                        fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
                        fontWeight="extrabold"
                        color="green.400"
                      >
                        Persönliche Warenlieferung
                      </Box>
                    </Flex>
                    <Flex
                      
                      flexDirection="column"
                      borderColor="gray.100"
                      p={6}
                      textAlign="center"
                      borderBottomWidth={ '1px'  }
                      borderRightWidth={ '1px'}
                    >
                      <Box
                        as="dt"
                        order="2"
                        mt={2}
                        fontSize="lg"
                        lineHeight="6"
                        fontWeight="medium"
                        color="gray.500"
                      >
                        Für Fragen und Wünsche
                      </Box>
                      <Box
                        as="dd"
                        order="1"
                        fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
                        fontWeight="extrabold"
                        color="green.400"
                      >
                        24 Stunden Erreichbar
                      </Box>
                    </Flex>
                    <Flex
                      
                      flexDirection="column"
                      borderColor="gray.100"
                      p={6}
                      textAlign="center"
                      borderBottomWidth={ '1px'  }
                      borderRightWidth={ '1px'}
                    >
                      <Box
                        as="dt"
                        order="2"
                        mt={2}
                        fontSize="lg"
                        lineHeight="6"
                        fontWeight="medium"
                        color="gray.500"
                      >
                        bei Jura, LaCimbali und servomat steigler mit eigener Werkstat
                      </Box>
                      <Box
                        as="dd"
                        order="1"
                        fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
                        fontWeight="extrabold"
                        color="green.400"
                      >
                        Vertragspartner für Vertrieb 
                      </Box>
                    </Flex>
                   
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}