import { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
    children: string
}

const ExpandableText = ({ children }: Props) => {
    const limit = 300;
    const [expanded, setExpanded] = useState(false);

    if (children.length <= limit)
        return <Text>{children}</Text>

    const summary = expanded ? children : children.substring(0, limit) + '...';

    return (
        <Text justifyContent={'center'} textAlign={'justify'}>
            {summary}
            <Button size={'xs'} fontWeight={'bold'} onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show less' : 'Show more'}
            </Button>
        </Text>
    )
}

export default ExpandableText