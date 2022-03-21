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

import Jura from "../../mashcineCategory/jura";

import JuraZubehör from "../../../componenets/jura/Zubehor";

import UberService from "../../../componenets/UberService";

import X8slider from "../../../componenets/jura/productCarousel/X8slider.jsx";

import X3doc from "../../../componenets/jura/documents/X3doc.jsx";

const x8 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Giga X8 || Kaffee-Service Berlin Peter Ganss GmbH</title>
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
            <BreadcrumbLink href="/mashcineCategory/jura">
              Jura Kaffeevollautomaten
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Giga X8 </BreadcrumbLink>
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
            <X8slider />
          </Box>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Text
                textAlign={{ base: "center", lg: "left" }}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Giga X8
              </Text>
              <Text
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue("gray.900", "gray.400")}
                textAlign={{ base: "center", lg: "left" }}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Jura
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
                  Die GIGA X8 ist eine Neuentwicklung auf Basis der langjährigen
                  Erfahrung aus dem Hause Jura für die professionelle
                  Kaffeeversorgung. Die einzigartiger Speed-Funktion bietet
                  perfekten Kaffeegenuss in Rekordzeit - ideal bei maximaler
                  Auslastung. Sehr belastbar für einen täglichen Bezug von
                  täglich 200 Tassen höchsten Kaffeegenuss. Mit den 2
                  Farbvarianten Chrom und Schwarz passt sie sich perfekt in Ihre
                  Küche ein.
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
                    src={"/jura/x8/7.jpg"}
                  />
                  <Text
                    fontSize={{ base: "lg", sm: "xl", lg: "xl" }}
                    p={{ base: 0, md: 30 }}
                    textAlign={"center"}
                    mt={{ base: "10px", lg: "80px" }}
                  >
                    Die neue GIGA X8 hat’s in sich: Zwei
                    Hochleistungs-Keramikscheiben-Mahlwerke liefern zuverlässig
                    über Jahre eine präzise, konstant gleichmäßige Mahlung.
                    Dafür sorgt eine Top-Innovation: A.G.A. (Automatic Grinder
                    Adjustment) – die elektronisch gesteuerte, automatische
                    Nachjustierung. Der Puls-Extraktionsprozess (P.E.P.®)
                    optimiert die Extraktionszeit für kurze Spezialitäten und
                    CLARIS Pro Smart in Kombination mit dem Intelligent Water
                    System (I.W.S.) liefert perfekte Wasserqualität für puren
                    Geschmack.
                  </Text>

                  <Text
                    fontSize={{ base: "lg", sm: "xl", lg: "xl" }}
                    p={{ base: 0, md: 30 }}
                    textAlign={"center"}
                    mt={{ base: "10px", lg: "80px" }}
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                  >
                    Gesteigerte Leistung bei gleichzeitiger Qualitätsoptimierung
                    – das ist die neue GIGA X8. Die Bedienung über das
                    // eslint-disable-next-line react/no-unescaped-entities
                    prägnante, 4,3 große, hochauflösende
                    Touchscreen-Farbdisplay präsentiert sich klar verständlich
                    und vollkommen intuitiv. Die geschirrspülertaugliche
                    Restwasserschale lässt sich mit nur einer Hand entnehmen,
                    leeren und wieder einsetzen. Dabei verhindert der optimal
                    gelegte Schwerpunkt ein Überschwappen. Einfach, sauber,
                    schnell, bequem – der 5-Sterne-Gedanke reicht bis ins
                    kleinste Detail
                  </Text>
                  <Image
                    p={6}
                    w={"950px"}
                    alt={"Login Image"}
                    objectFit={"contain"}
                    src={"/jura/x8/8.jpg"}
                  />
                </Grid>
              </TabPanel>

              <TabPanel>
                <Box py={12}>
                  <List fontSize={"lg"} spacing={4}>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Bis zu 32 individuell programmierbare Spezialitäten
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Sehr schnelle Zubereitung: z.B. 2 Latte macciato in nur 86
                      sek..
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Höhenverstellbarer Kaffeeauslauf mit Tassenbeleuchtung
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Hohe Kapazität: 5L Wassertank und 2 x 650g Bohnenbehälter
                      minimaler Aufwand beim Befüllen
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      200 Tassen pro Tag (365 Tage im Jahr)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Bereiten Sie gleichzeitig 1-2 Tassen oder ein Kännchen
                      (360ml) zu
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Einfach bedienbar: Individuell programmierbares
                      Touch-Farbbildschirm und akustische Rückmeldung
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Professionelle Kaffeezubereitung: zwei elektrisch
                      verstellbare Profi-Keramikmahlwerke für schnelle, präzise,
                      homogene, konstant gleichmäßige Mahlung, <br /> sowie zwei
                      Heizsysteme, zwei Pumpen und zwei Fluidsysteme und
                      variable Brühkammer mit 5 bis 16g
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      Nochmals verbesserte integrierte Reinigungsprogramme
                    </ListItem>
                    <ListItem>
                      <ListIcon as={StarIcon} color="green.500" />
                      370x565x497mm (BxHxT), 19kg, 220-240V, 2700W
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
      <Jura />
    </div>
  );
};

export default x8;
