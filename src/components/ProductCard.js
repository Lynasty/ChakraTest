import { Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Card from '../customComponent/Card/Card'
import { AtSignIcon } from '@chakra-ui/icons'

export default function ProductCard() {

  const bg = useColorModeValue('white', 'blackAlpha.600')
  const color = useColorModeValue('gray.900', 'gray.200')

  return (
    <Card bg={bg}>
      <Image
        src='https://chakra-ui.com/eric.jpg'
        rounded='full'
        w={32}
        h={32}
        boxShadow='md'
      />
      <Heading mt={6} maxW={60} size='lg' textAlign='center' color={color}>
        Welcome back, Eric
      </Heading>
      <Text mt={6} mb={6} size='sm' color={color}>
        Use your fingerprint to continue.
      </Text>
      <AtSignIcon />
    </Card>
  )
}
