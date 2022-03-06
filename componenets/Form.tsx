import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Switch ,
    Textarea ,
    useBreakpointValue,
    IconProps,
    Icon,
    Grid,
    CheckboxGroup,
    Checkbox,
    Select,
    filter,
    Center,
  } from '@chakra-ui/react';
  
 
  
  export default function Form() {
    return (
      <Box
      my={12}
      backgroundImage={'/b.jpg' }
      backgroundSize={'cover'}  
      borderRadius={5}
      filter={'blur'}
      position={'relative'} w={'full'} >
        <Center
        py={10}
        >
          
          <Stack
            opacity={'1'}
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 5, sm: 6, md: 8 }}
            px={30}
            spacing={{ base: 8 }} 
            w={{ base: '90%', sm: '3xl', md: '5xl' }}
            alignItems={'center'} 
            zIndex={2} >
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                textAlign={'center'}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Kontaktformular
              </Heading>
              <Text color={'gray.500'} textAlign={'center'} fontSize={{ base: 'sm', sm: 'md' }}>
              Gern laden wir Sie auf einen Kaffee oder Espresso ein! Wir beraten Sie 
              kompetent und freundlich. Gemeinsam finden wir auch für Sie den richtigen 
              Service für Ihre Kaffeeversorgung am Arbeitsplatz.
              </Text>
            </Stack>

            
            <Box as={'form'} mt={10}>

            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6} w={'100%'} >
             
                <Input
                  placeholder="Vorname"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Nachname "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Unternehmen"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="firstname@lastname.io"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Anschrift "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                /> 
                <Input
                  placeholder="Telefon"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                 <Input
                  placeholder="PLZ "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                /> 
                <Input
                  placeholder="Ort "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                /> 
                <Stack direction={'column'} >
                <CheckboxGroup  colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                <Text>Welcher Service interessiert Sie? (Mehrfachauswahl möglich)</Text>
                <Stack spacing={[1, 5]} direction={['column', 'column']}>
                <Checkbox value='Filterkaffee'> Kaffee-Service (Filterkaffee)</Checkbox>
                <Checkbox value='Espresso-Pads'>Espresso-Service (Espresso-Pads)</Checkbox>
                <Checkbox value='Kaffeevollautomat'>Espresso-Service (Kaffeevollautomat)</Checkbox>
                <Checkbox value='TableTop'>Espresso-Service (TableTop)</Checkbox>
                <Checkbox value='Espresso-Bohnen'>Espresso Bohnen von Marcafé</Checkbox>
                </Stack>
                </CheckboxGroup>
                </Stack>
               
                <Stack>
                 <Select placeholder='Ihre aktuelle Kaffeeversorgung'>
                 <option value='option1'>Haushaltskannen</option>
                 <option value='option2'>Kapselmaschine</option>
                 <option value='option3'>Kaffeeautomat</option>
                 <option value='option3'>Sonstiges</option>
                 </Select>
                
                 <Text>Haben Sie bereits einen Service-Vertrag?</Text>  
                <Stack spacing={5} direction='row'>
                <Switch  colorScheme='blue' >
                 Ja
                </Switch >
                <Switch  colorScheme='blue'  >
                 Nein
                </Switch >
                </Stack>
 
                <Select placeholder='Ihr Kaffeeverbrauch' pt={5} >
                <option value='option1'> Keinen Kaffeeverbrauch </option>
                <option value='option2'> 2 - 4 Haushaltskannen am Tag </option>
                <option value='option3'>5 - 7 Haushaltskannen am Tag </option>
                <option value='option3'>8 - 12 Haushaltskannen am Tag </option>
                <option value='option3'>12 und mehr Haushaltskannen am Tag </option>
               </Select>
 
               <Select placeholder='Ihr Espresso- und Cappuccinoverbrauch' pt={5} >
               <option value='option1'> keinen Espressoverbrauch </option>
               <option value='option2'> 7 - 20 Tassen am Tag </option>
               <option value='option3'>20 - 30 Tassen am Tag</option>
               <option value='option3'>30 - 60 Tassen am Tag</option>
               <option value='option3'>60 - 120 Tassen am Tag</option>
               <option value='option3'>120 - 150 Tassen am Tag</option>
               <option value='option3'>150 - 200 Tassen am Tag</option>
               <option value='option3'>Mehr als 200 Tassen am Tag</option>
               </Select>

               </Stack>
               
              </Grid>


              <Textarea placeholder='Kommentar / Frage' mt={5}  />

              <Checkbox mt={5}  >Ich habe die Datenschutzbestimmungen gelesen und einverstanden.</Checkbox>

              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}>
                Submit
              </Button>
            </Box>
             
          </Stack>
        </Center>
         
      </Box>
    );
  }
 