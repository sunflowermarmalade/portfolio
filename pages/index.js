import React from "react";
import Head from "next/head";
import {
  Flex,
  Heading,
  Box,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Spotify from "@components/Spotify";
import Projects from "@components/Projects";
import Hello from "@components/Hello";
import Nav from "@components/Navbar"


function Home(props) {
  const { toggleColorMode } = useColorMode();

  const themeIcon = useColorModeValue(<BsFillSunFill/>, <BsFillMoonFill/>)

  return (
    <Box>
      <Head>
        <title>Hello 👋</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav/>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Projects/>
      </Flex>
    </Box>
  );
}

export default Home;
