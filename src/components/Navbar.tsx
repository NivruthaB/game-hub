import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
    return (
        <HStack paddingBottom={10} justifyContent={'space-between'}>
            <Image src={logo} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar