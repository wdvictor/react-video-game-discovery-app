import './App.css'
import {  Grid, GridItem, Show, useBreakpointValue } from '@chakra-ui/react'
import NavBar from './components/NavBar';

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
    <GridItem area={'nav'}><NavBar/></GridItem>
    <Show  when={isLargeScreen}>
    <GridItem area={'aside'}>Aside</GridItem>

    </Show>
    <GridItem area={'main'}>Main</GridItem>

  </Grid>

}
export default App
