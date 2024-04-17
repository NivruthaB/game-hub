import React from 'react'
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card height={'250px'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody paddingX={2}>
                <HStack justifyContent={'space-between'} width={'100%'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={'xl'}>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard