import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

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

export default function CaptionCarousel() {
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
      title: ' ',
      text:
        " ",
      image:
        '/hero/jura.png',
    },
    {
      title: ' ',
      text:
        "  ",
      image:
      '/hero/rex.png',
    },
    { 
      image:
      '/hero/tt.png',
    },
    {
       
      image:
      '/hero/mp.png',
    },
  ];

  return (
    <Box
      position={'relative'}
      mt={5}
      height={'550px'}
      width={{ base: '100%', md: '80%', lg: '100%' }}
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
        top={280}
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
        top={280}
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
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='contain'
            backgroundImage={`url(${card.image})`}>
            {/* This is the block for the caption */}
            <Container size="container.lg" height="600px" position="relative">
               
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}