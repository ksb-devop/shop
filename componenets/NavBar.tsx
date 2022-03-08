import {
    Box,
    Image,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.900')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'90px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          top={0} 
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            
            >
              
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex 
          flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
         <Link href='/' >
         <Image  
          backgroundColor={'blackAlpha.600'}
          src='/logo.png' 
          alt='logo' 
          borderRadius={5}
          px={2}
          py={2}
          w={350}  />
          </Link>  
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
           
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} alignItems={'center'} ml={10} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'lg'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack  spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [

    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Shop', 
      children: [
        {
          label: 'Zum Shop',  
          href: '/shop',
        },
        {
          label: 'Filterkaffee',  
          href: '/category/filterkaffee',
        },
        {
          label: 'Espresso-Pads',  
          href: '/category/espresso-pads',
        },
        {
          label: 'Kaffeebohnen ',  
          href: '/category/kaffeebohnen',
        },
        {
          label: 'Kakao ',  
          href: '/category/kakao',
        },
        {
          label: 'Cappuccino ',  
          href: '/category/cappuccino',
        },
        {
          label: 'Tee ',  
          href: '/category/tee',
        },
        {
          label: 'Milch, Zucker & Süßstoff ',  
          href: '/category/milch',
        },
        {
          label: 'Gebäck ',  
          href: '/category/geback',
        },
        {
          label: 'Schokoladiges & Salziges ',  
          href: '/category/schocolade',
        },
        {
          label: 'Reinigung ',  
          href: '/category/reinigung',
        },
        {
          label: 'Tafelgeschirr ',  
          href: '/category/tafelgeschirr',
        },
        {
          label: 'Küchenartikel ',  
          href: '/category/kuchenartikel',
        },

      ],
    },
    {
      label: 'Büro Maschinen', 
      children: [
        {
          label: 'Alle Maschinen Kategorien',
          subLabel: 'Perfekter Qualität auf Knopfdruck.',
          href: '/maschine',
          
        },
        {
          label: 'Espresso-Pads-Maschine',
          subLabel: 'Perfekter Qualität auf Knopfdruck.',
          href: '/mashcineCategory/padmashine',
          
        },
        {
          label: 'Vollautomaten',
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/vollautomaten',
        },
        {
          label: 'Table Top',
          subLabel: 'Standautomaten ideal für Büros, Praxen und Werkstätten. Modern & praktisch.',
          href: '/mashcineCategory/tabletop',
        },
        {
          label: 'Jura Kaffeevollautomaten ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/jura',
        },
        {
          label: 'Rex Royal Kaffeevollautomaten ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/rexroyal',
        },
        {
          label: 'LaCimbali Kaffeevollautomaten ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/lacimbali',
        },
        {
          label: 'Wasserspender Stilvoll ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/wasser',
        },
        {
          label: 'Wasserspender spaqa Auftischgeräte & Tower ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/wasserspender',
        },
        {
          label: 'Saftpressen und Entsafter ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/saft',
        },
        {
          label: 'Zubehör ', 
          subLabel: 'Italienischen Espresso, leckeren Cappuccino',
          href: '/mashcineCategory/zubehor',
        },
      ],
    },
    {
      label: 'Kaffee-Service',
      href: '/kaffeeService',
    },
    {
      label: 'Espresso-Service',
      href: '/espressoService',
    },
    {
      label: 'Über Unseren Service',
      href: '/service',
    },
    
    {
      label: 'Kontakt',
      href: 'contact',
    },
  ];