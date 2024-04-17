import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import Navbar from './components/Navbar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
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
        <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside'>
          <GenreList onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })} selectedGenreId={gameQuery.genreId} />
        </GridItem>
      </Show >
      <GridItem area='main' display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} paddingLeft={5}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platformId) => setGameQuery({ ...gameQuery, platformId })} />
            </Box>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid >
  )
}

export default App