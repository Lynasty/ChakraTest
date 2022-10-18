import { Box, defineStyleConfig, useStyleConfig } from '@chakra-ui/react'
import React from 'react'


function Card(props) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('CardStyle', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default Card;
