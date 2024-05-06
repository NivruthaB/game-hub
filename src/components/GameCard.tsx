import React from 'react'
import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Link } from 'react-router-dom';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Link to={'/game-hub/games/' + game.slug}>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)} />
                <CardBody paddingX={2}>
                    <HStack justifyContent={'space-between'} width={'100%'}>
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Heading fontSize={'xl'}>
                        {game.name}
                    </Heading>
                </CardBody>
            </Card>
        </Link>
    )
}

export default GameCard