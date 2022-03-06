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

  const [maschineCategories, setMaschineCategories] = useState([]);

  useEffect(() => {
    getMascinenCategories().then((newMaschineCategories) => {
      setMaschineCategories(newMaschineCategories);
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
          {maschineCategories.map((maschineCategories, index) => (
        
        <Link  href={`/mashcineCategory/${maschineCategories.node.slug}`} key={maschineCategories.node.slug} > 
        
        <Text
        textAlign={'center'}
        backgroundColor={'green.400'}
        my={2}
        borderRadius={5}
        >{maschineCategories.node.name}</Text>
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

export default SideCategories