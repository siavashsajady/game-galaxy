import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav' bg='#D8D8D8'>
        nav
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
