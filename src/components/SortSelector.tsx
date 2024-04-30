import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useGameQueryStore } from '../store'

const SortSelector = () => {
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder);
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' }
    ]

    const sortOrderLabel = sortOrders.find((order) => order.value === selectedSortOrder)?.label;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} width={'fit-content'}>
                {sortOrderLabel || 'Order by: Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => <MenuItem onClick={() => setSelectedSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector