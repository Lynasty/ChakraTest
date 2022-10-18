import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  Container,
  chakra,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ProductCard from './components/ProductCard';
import myTheme from './theme/myTheme';
import ButtonFB from './customComponent/Button/ButtonFB';

function App() {

  return (
    <ChakraProvider theme={myTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container bg='blue.600' centerContent py={8}>
            <ProductCard />
            <Box mt={2}>
              <ButtonFB textBtn="Click Me" />
            </Box>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
