import React, { useState, useEffect } from 'react'
import { getCategories } from '../services';
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
      top={10}
      
      position={'absolute'}
      ref={btnRef} 
      colorScheme='teal' 
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
          <DrawerHeader>Nach Kategorien durchsuchen</DrawerHeader>

          <DrawerBody>
          {categories.map((categories, index) => (
        
        <Link  href={`/category/${categories.node.slug}`} key=''  > 
        
        <Text
        textAlign={'center'}
        backgroundColor={'blue.400'}
        my={2}
        borderRadius={5}
        >{categories.node.name}</Text>
        </Link>   
        
      ))}
          </DrawerBody>

          

          <DrawerFooter>
            
            <Button colorScheme='blue'>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideCategories