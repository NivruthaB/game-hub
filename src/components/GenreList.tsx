import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { useGameQueryStore } from '../store';

const GenreList = () => {
    const { data, error, isLoading } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
    if (error) return <Text>{error.message}</Text>;

    if (isLoading) return <Spinner />;
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={5} textAlign={'left'}>Genres</Heading>
            <List>
                {
                    data?.results?.map((genre) => <ListItem key={genre.id} paddingY={'5px'}>
                        <HStack>
                            <Image boxSize={'32px'} borderRadius={8} objectFit={'cover'} src={getCroppedImageUrl(genre.image_background)} />
                            <Button
                                whiteSpace={'nowrap'}
                                justifyContent={'flex-start'}
                                fontWeight={genre.id === selectedGenreId ? 'bolder' : 'normal'}
                                textDecoration={genre.id === selectedGenreId ? 'underline' : ''}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontSize={'large'}
                                variant={'link'}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                    )
                }
            </List>
        </>
    )
}

export default GenreList