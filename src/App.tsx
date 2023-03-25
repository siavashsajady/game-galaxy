import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='#E49393'>
          aside
        </GridItem>
      </Show>

      <GridItem area='main' bg='#408E91'>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
