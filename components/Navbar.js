import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

import {BsMoonFill, BsFillSunFill} from 'react-icons/bs'
import Spotify from './Spotify';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.50')} px={2} rounded={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          <Spotify />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} p={2}>
                {colorMode === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
              </Button>

              <Menu>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
