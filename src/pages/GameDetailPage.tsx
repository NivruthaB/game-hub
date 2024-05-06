import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'start'}>
            <Heading marginBottom={10}>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
            <GameScreenshots gameId={game.id} />
        </Box>
    )
}

export default GameDetailPage