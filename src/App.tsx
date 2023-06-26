import { Layout } from './components/Layout';
// import styled from 'styled-components'
import { 
  Box,
  ChakraProvider,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';

// const Box = styled.div`
//   background-color: orange;
//   border-radius: 25px;
//   padding-left: 15px;
// `

function App() {
  return (
    <ChakraProvider> 
      <Layout >
        <Box padding='25px' backgroundColor='#123570' width='100%' height='100%'>
          <Card/>
        </Box>
      </Layout>

    </ChakraProvider>
  );
}

export default App;
