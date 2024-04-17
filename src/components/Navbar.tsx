import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack paddingBottom={10} justifyContent={'space-between'}>
            <Image src={logo} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar