import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
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
                {sortOrders.map((order) => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector