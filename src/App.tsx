import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import Navbar from './components/Navbar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside'>
          <GenreList />
        </GridItem>
      </Show >
      <GridItem area='main' display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} paddingLeft={5}>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid >
  )
}

export default App