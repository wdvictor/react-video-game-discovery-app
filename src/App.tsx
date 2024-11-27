import './App.css'
import {  Grid, GridItem, Show, useBreakpointValue } from '@chakra-ui/react'

function App() {

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  return <Grid  templateAreas={{
      base:`"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
    <GridItem area={'nav'} bg='coral'>Nav</GridItem>
    <Show  when={isLargeScreen}>
    <GridItem area={'aside'} bg='gold'>Aside</GridItem>

    </Show>
    <GridItem area={'main'} bg='dodgerblue'>Main</GridItem>

  </Grid>

}
export default App
