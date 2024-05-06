import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
    return (
        <HStack paddingBottom={10} justifyContent={'space-between'} height={'70px'}>
            <Image width={'100px'} src={logo} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar