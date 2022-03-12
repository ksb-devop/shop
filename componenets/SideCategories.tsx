import React, { useState, useEffect } from 'react'
import { getCategories, getMascinenCategories } from '../services';
import { Heading, Text, Box, Image,Link, Button, useDisclosure  } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const SideCategories = () =>  {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
 


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    
    <>
      <Button 
      width={170}
      left={10}
      top={'120px'}
      
      position={'absolute'}
      ref={btnRef} 
      color='green.400' 
      onClick={onOpen}>
        Alle Kategorien
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>   Alle Kategorien</DrawerHeader>

          <DrawerBody>
          {categories.map((categories, index) => (
        
        <Link  href={`/category/${categories.node.slug}`} key={categories.node.slug} > 
        
        <Text
        textAlign={'center'}
        backgroundColor={'green.400'}
        my={2}
        borderRadius={5}
        >{categories.node.name}</Text>
        </Link>   
        
      ))}
          </DrawerBody>

          <DrawerBody>
          {maschineCategories.map((maschineCategories) => (
        
        <Link  href={maschineCategories.href} key={maschineCategories.index} > 
        
        <Text
        textAlign={'center'}
        backgroundColor={'green.400'}
        my={2}
        borderRadius={5}
        >{maschineCategories.label}</Text>
        </Link>   
        
      ))}
          </DrawerBody>

          <DrawerFooter>
            
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Kaffee-Service Berlin Peter Ganss GmbH. All rights reserved
          </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

interface NavItem {
  label: string;
  index?: string;
  children?: Array<NavItem>;
  href?: string;
}

const maschineCategories: Array<NavItem> = [
 
   
       
      {
        index: '2',
        label: 'Jura Kaffeevollautomaten ',  
        href: '/mashcineCategory/jura',
      },
      {
        index: '3',
        label: 'Rex Royal Kaffeevollautomaten ',  
        href: '/mashcineCategory/rex',
      },
      {
        index: '4',
        label: 'Espresso-Pads-Maschine', 
        href: '/mashcineCategory/padmashine',
        
      },
      
      { index: '5',
        label: 'Table Top', 
        href: '/mashcineCategory/tabletop',
      },
      
      { index: '6',
        label: 'Wasserspender',  
        href: '/mashcineCategory/wasser',
      },
      
      
      { index: '7',
        label: 'Zubehör ',  
        href: '/mashcineCategory/zubehor',
      },
   
];

export default SideCategories