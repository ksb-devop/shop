import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Flex,
  SimpleGrid,
  useColorModeValue,
  createIcon,
  Center,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Center>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"dark-lg"}
        opacity={0.9}
        h={{ base: '100%', md: 350 }}
        w={{ base: "100%", md: "80%", lg: "100%" }}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
      >
        {children}
      </Stack>
    </Center>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading
      color={"green.400"}
      fontSize={{ base: "xl", sm: "4xl", md: "3xl" }}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={{ base: "lg", sm: "lg", md: "xl" }}
    >
      {children}
    </Text>
  );
};

const UberService = () => {
  return (
    <div>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 10, md: 4, lg: 10 }}
      >
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Kundenbetreuung</TestimonialHeading>
            <TestimonialText>
              Wir helfen Ihnen bei der richtigen Kaffeewahl für Ihren Einsatz:
              ob Filterkaffee, Espresso-Pads oder ganze Bohnen im
              Vollautomat.Wir rufen Sie in regelmäßigen Abständen an und sorgen
              dafür, dass Sie Ihre Kaffeebestellung nicht versäumen können.
            </TestimonialText>
          </TestimonialContent>
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Weniger Aufwand</TestimonialHeading>
            <TestimonialText>
              Sie wollen so wenig Aufwand wie möglich? Unsere Techniker
              installieren Ihnen einen Festwasseranschluss, Kaffeesatzabwurf und
              Restwasserablaufset. Um die Installation, Programmierung, sowie
              regelmäßige Wartung, Überprüfung und Entkalkung der Geräte
              brauchen Sie sich nicht zu kümmern – das übernehmen wir gern für
              Sie.
            </TestimonialText>
          </TestimonialContent>
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Mehr Wahlmöglichkeiten</TestimonialHeading>
            <TestimonialText>
              Welche Kaffeesorte passt am besten zu Ihnen? Sie haben die Wahl
              aus unserem umfangreichem Angebot aus echten italienischen
              Kaffeebohnen, feinem Filterkaffee und italienischen Kaffeepads -
              wir kennen und prüfen unsere Sorten genau und bieten Ihnen die
              Möglichkeit zu probieren, welcher Kaffee Ihren Ansprüchen
              entspricht.
            </TestimonialText>
          </TestimonialContent>
        </Testimonial>

        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>
              Technische Schwierigkeiten?{" "}
            </TestimonialHeading>
            <TestimonialText>
              Kein Problem! Rufen Sie uns an – die meisten Probleme lassen sich
              einfach und schnell am Telefon klären. Sollte dies nicht gelingen,
              kommt noch am selben Werktag einer unserer Techniker bei Ihnen
              vorbei. Falls notwendig tauscht er das Gerät aus. Ihr defektes
              Gerät wird in unserer Werkstatt fachmännisch und schnell
              repariert. Unsere Techniker besuchen regelmäßig Schulungen um
              immer auf dem aktuellsten Stand zu sein.
            </TestimonialText>
          </TestimonialContent>
        </Testimonial>
      </SimpleGrid>
    </div>
  );
};

export default UberService;
