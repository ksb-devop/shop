import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import KaffeeServiceGrid from '../componenets/KaffeeServiceGrid'

const about = () => {
  return (
    <div>
      <Container>
        <Heading>
          <Text>Über KSB </Text>
        </Heading>
      </Container>
      <KaffeeServiceGrid/>
    </div>
  )
}

export default about