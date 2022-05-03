import React, {useEffect, useState} from "react";
import {
    Flex,
    Heading,
    Box,
    Button,
    IconButton,
    useColorMode,
    useColorModeValue,
    Text
  } from '@chakra-ui/react'

import { BsFillSunFill, BsSpotify } from 'react-icons/bs';
import axios from "axios";


function Spotify() {
  const boxBackground = useColorModeValue("green.300", "green.600");
  const [songName, setSongName] = useState('')
  const [artist, setArtist] = useState([])
  const [songUrl, setSongUrl] = useState('')
  const token = 'BQD69gjTtU55hZidQ4xAQ_B1j1bkB7ajXH5FlcU9uVZ7junD9jAOmnwDsKtJGwozL9yCLkthpkE0zeNmv2vyhd2gYw6lp6pNlAUocDVJq2ho2JgDVL7QoGqrQDFIVaOddzsY8eKnVd8K5nIsJoKBLtDlm0tKUu81xAJSZsdAxQa0F9OglXRqo8Vpncq-yUPnFRI2RpSFJUl3YJOXtXrepAq2AqTLL5RR5VfswQv9MhurYU81EH2johIG0AR1pUM8WlqcXPPbpzrmqtTmqvdu6_LyrfEj5xYT_cXe19iQuFXbrjgoeA'

  useEffect(() => {
    let config = {
      headers: {
          Authorization: `Bearer ${token}`
      },
      responseType: 'json',
  }
  axios.get("https://api.spotify.com/v1/me/player/currently-playing", config).then(({data}) => {
    console.log(data.item)
    setSongName(data.item.name)
    let artists = data.item.artists
    let arr = []
    for(let obj of artists){
      arr.push(obj.name)
    }
    setArtist(arr)
  }).catch(e => console.log(e))
    
  }, []);

  return (
    <a target="_blank" href={songUrl ? songUrl : "/"} rel="noopener noreferrer">
    <Box display='flex' alignItems='baseline' background={boxBackground} p={2} rounded={6} fontSize='sm' >
     <Text  color="white" pr={2} pt={1}>  <BsSpotify /> </Text><Text color="white" fontWeight='bold'> {songName ? songName + " - " + artist: "Not playing anything"}</Text>
    </Box>
    </a>
  ); 
}

export default Spotify;
