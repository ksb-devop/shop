import React from 'react'
import { saveAs } from "file-saver"; 
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
  Divider, 
  ButtonGroup,
} from "@chakra-ui/react";

function X3doc()  {
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
        <Box>
        <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                >
                  <Text
                    fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                    px={{ base: 2, lg: 10 }}
                  >
                    Jura GIGA X3 Anleitung PDF
                  </Text>

                  <ButtonGroup>
                    <a
                      href="/jura/x3/pdf/Jura_GIGA_X3_Anleitung.pdf"
                      target="_blank"
                    >
                      <Button mx={2}>Open </Button>
                    </a>

                    <Button float={"right"} onClick={saveFile}>
                      Download{" "}
                    </Button>

                  </ButtonGroup>

                </Grid>

                <Divider orientation="horizontal" p={2} />

                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                >
                  <Text
                    fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                    px={{ base: 2, lg: 10 }}>
                    Jura GIGA X3 Entkalken PDF
                  </Text>
                  <ButtonGroup>
                    <a
                      href="/jura/x3/pdf/Jura_GIGA_X3_Entkalken.pdf"
                      target="_blank"
                    >
                      <Button mx={2}>Open </Button>
                    </a>
                    <Button onClick={saveFile1}>Download </Button>
                    
                  </ButtonGroup>
                </Grid>

                <Divider orientation="horizontal" p={2} />
                 
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                >
                  <Text 
                  fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                  px={{ base: 2, lg: 10 }}
                  >
                    Jura GIGA X3 Filter-wechseln PDF
                  </Text>
                  <ButtonGroup>
                  <a
                    href="/jura/x3/pdf/Jura_GIGA_X3_Filter_wechseln.pdf"
                    target="_blank"
                  >
                    <Button mx={2}>Open </Button>
                  </a>
                  <Button onClick={saveFile2}>Download </Button>
                  </ButtonGroup>
                </Grid>

                <Divider orientation="horizontal" p={2} />
                
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                > 
                  <Text 
                  fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                  px={{ base: 2, lg: 10 }}
                  >
                    Jura GIGA X3 Geraet-Reinigen PDF
                  </Text>

                  <ButtonGroup>
                  <a
                    href="/jura/x3/pdf/Jura_GIGA_X3_Geraet_Reinigen.pdf"
                    target="_blank"
                  >
                    <Button mx={2}>Open </Button>
                  </a>
                  <Button onClick={saveFile3}>Download </Button>
                  </ButtonGroup>
                </Grid>

                <Divider orientation="horizontal" p={2} />
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                >
                  <Text
                  fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                  px={{ base: 2, lg: 10 }}
                  >
                    Jura GIGA X3 Milchsystem-reinigen PDF
                  </Text>

                  <ButtonGroup>
                  <a
                    href="/jura/x3/pdf/Jura_GIGA_X3_Milchsystem_reinigen.pdf"
                    target="_blank"
                  >
                    <Button mx={2}>Open </Button>
                  </a>
                  <Button onClick={saveFile4}>Download </Button>
                  </ButtonGroup>
                </Grid>

                <Divider orientation="horizontal" p={2} />

                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                >
                  <Text 
                  fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                  px={{ base: 2, lg: 10 }}>
                    Jura GIGA X3 Produktblatt PDF
                  </Text>

                  <ButtonGroup>
                  <a
                    href="/jura/x3/pdf/Jura_GIGA_X3_Produktblatt.pdf"
                    target="_blank"
                  >
                    <Button mx={2}>Open </Button>
                  </a>
                  <Button onClick={saveFile5}>Download </Button>
                  </ButtonGroup>
                </Grid>

                <Divider orientation="horizontal" p={2} />
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={2}
                  w={{ base: "100%", lg: "140%" }}
                >
                  <Text 
                    fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
                    px={{ base: 2, lg: 10 }}>
                    Jura GIGA X3 Technische-Dokumentation PDF
                  </Text>
                  <ButtonGroup>
                    <a
                      href="/jura/x3/pdf/Jura_GIGA_X3_Technische_Dokumentation.pdf"
                      target="_blank"
                    >
                      <Button mx={2}>Open </Button>
                    </a>
                    <Button onClick={saveFile6}>Download </Button>
                  </ButtonGroup>
                </Grid>
                <Divider orientation="horizontal" p={2} />
        </Box>
    </div>
  )
}

export default X3doc