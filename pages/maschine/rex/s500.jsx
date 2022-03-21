import React from "react";
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ButtonGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { saveAs } from "file-saver";

import {
  CloseIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

// Here we have used react-icons package for the icons
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import Rex from "../../mashcineCategory/rex";

import JuraZubehör from "../../../componenets/jura/Zubehor";

import UberService from "../../../componenets/UberService";

import S500slider from "../../../componenets/rex/productCarousel/S500slider.jsx";

import X3doc from "../../../componenets/jura/documents/X3doc.jsx";

const s500 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Rex Royal S500 || Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        top={{ base: "90px", lg: 120 }}
        left={{ base: "10px", lg: 100 }}
        position={"absolute"}
      >
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/maschine">Büro Maschinen</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/mashcineCategory/rex">
              Rex Royal Kaffeevollautomaten
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Rex Royal S500 </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Box
            my={10}
            borderRadius={10}
            boxShadow={"dark-lg"}
            mx={{ base: 5, lg: 0 }}
            w={{ base: "90%", lg: "80%" }}
          >
            <S500slider />
          </Box>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Text
                textAlign={{ base: "center", lg: "left" }}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Rex Royal S500
              </Text>
              <Text
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue("gray.900", "gray.400")}
                textAlign={{ base: "center", lg: "left" }}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Der schweizer Profi
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
                  fontWeight={"300"}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Echte Leidenschaft und 100 Prozent Swissness. Dies alles
                  steckt in der neuen Rex-Royal S2, der Profikaffeemaschine. Ein
                  intuitiver, videofähiger 7-Zoll TouchScreen bietet eine ganze
                  Bandbreite individueller Getränkekreationen an. Vom Espresso,
                  dem klassischen Kaffee, bis hin zu zahlreichen Milch- und
                  Mischgetränken wie Cappuccino, Latte Macchiato oder heiße
                  Schokolade, lässt die S2 keine Wünsche offen.
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em" flexWrap={"wrap"}>
              <Tab px={5}>Vorzüge</Tab>
              <Tab px={5}>Technische Übersicht</Tab>
              <Tab px={5}>Unseren Service</Tab>
              <Tab px={5}>Zubehör</Tab>
              <Tab px={5}>Dokumente</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={0}
                  w={"100%"}
                >
                  <Image
                    p={6}
                    w={"800px"}
                    alt={"Login Image"}
                    objectFit={"contain"}
                    src={"/rex/s500/2.jpg"}
                  />
                  <Text
                    fontSize={{ base: "lg", sm: "xl", lg: "xl" }}
                    p={{ base: 0, md: 30 }}
                    textAlign={"center"}
                    mt={{ base: "10px", lg: "80px" }}
                  >
                     Die Rex-Royal S500 ist unser Kraftpaket auf höchstem Niveau,
                    sei es im Selbstbedienungs- oder im Servicebetrieb. Gerade,
                    wenn schnell und grosse Mengen verschiedenster Kaffee und
                    Mischgetränke benötigt werden, erfüllt die S500 jeden
                    individuellen Wunsch. Vom heissen Espresso über den
                    geschichteten Latte Macchiato, feinporigen Cappuccino,
                    kalten oder warmen Milchschaum bis zur süssen Schokolade.
                    Dank der S500 gelingen Ihnen diese Köstlichkeiten auf
                    Knopfdruck. Mit dem leistungsstarken Boiler ist ein
                    Heisswasserbezug ohne Unterbrechung jederzeit möglich und
                    Sie können gleichzeitig neben Heisswasser auch Kaﬀee- oder
                    Mischprodukte beziehen – auch als Doppelprodukte.
                  </Text>

                  <Text
                    fontSize={{ base: "lg", sm: "xl", lg: "xl" }}
                    p={{ base: 0, md: 30 }}
                    textAlign={"center"}
                    mt={{ base: "10px", lg: "80px" }}
                  >
                    Die S500 operiert mit bis zu drei separaten Boilern für die
                    Kaﬀeezubereitung, den Dampf- und Heisswasserbezug, sowie die
                    Milcherwärmung. Mit einer Heisswasserleistung von bis zu 58
                    l/Std. ist ein eﬃzienter Bezug ohne Unterbrechung jederzeit
                    möglich. Standardmässig mit zwei präzisen, leistungsstarken
                    Mühlen ausgerüstet, kann die S500 optional mit einem dritten
                    Mahlwerk ausgestattet werden. Dank dem beheizten
                    Kaﬀeeauslauf ist ein heisser, perfekter Espresso auch bei
                    längeren Standzeiten bzw. Bezugsunterbrüchen immer
                    gewährleistet.
                  </Text>
                  <Image
                    p={6}
                    w={"950px"}
                    alt={"Login Image"}
                    objectFit={"contain"}
                    src={"/rex/s500/7.jpg"}
                  />
                </Grid>
              </TabPanel>

              <TabPanel>
                <Box py={12}>
                  <List fontSize={"lg"} spacing={4}>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      100% Schweizer Qualität, optimiert für die Selbstbedienung
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Kaffeegenuss auf höchstem Niveau: Espresso, Café Crème, Cappuccino, Latte macchiato und vieles mehr...
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Doppelbezug: Bereiten Sie 2 Kaffeespezialitäten gleichzeitig zu
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      HACCP zertifizierter Reinigungsprozess garantiert einen hygienisch einwandfreien Betrieb bei minimalem Zeitaufwand
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Zwei 1kg Bohnenbehälter für Espresso- und Kaffeebohnen
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Für bis zu 270 Tassen pro Tag
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Heißwasserstundenleistung: 28 Liter
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Hochwertige Metall-Brühgruppe mit einem variablen Fassungsvermögen von bis zu 16g Kaffeepulver für optimale Extraction
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Einfach bedienbar über großes 7 Touch-Display
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Flexibel höhenverstellbarer Kombiauslauf 74 - 172mm
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      390x635x550mm (BxHxT), ab 46kg, 220-240V, 1900-3300W
                    </ListItem>
                  </List>
                </Box>
              </TabPanel>

              <TabPanel>
                <Box py={12}>
                  <UberService />
                </Box>
              </TabPanel>

              <TabPanel>
                <Box py={12}>
                  <JuraZubehör />
                </Box>
              </TabPanel>

              <TabPanel>
                <Box py={12}>
                  <X3doc />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      <Rex />
    </div>
  );
};

export default s500;
