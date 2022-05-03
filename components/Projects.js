import React, { useCallback, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  useColorModeValue,
  Text,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";



function Row(props) {
  return (
    <Tr>
      <Td>
        <Text as="u">
          <a href={props.url}>{props.name}</a>
        </Text>
      </Td>
      <Td>{props.desc}</Td>
      <Td>{props.stack}</Td>
    </Tr>
  );
}

function Projects({repos}) {
  const boxBackground = useColorModeValue("gray.100", "gray.700");


  useEffect(() => {
    console.log(repos)
  }, []);

  return (
    <Flex direction="column" background={boxBackground} p={20} rounded={6}>
      <Heading as="h6" size="lg" mb={6}>
        Here are my projects
      </Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>
            GitHub Projects @{" "}
            <Text as="u">
              <a href="https://github.com/sunflowermarmalade/" target="_blank">
                sunflowermarmalade
              </a>
            </Text>{" "}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Technology</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
            {repos ? repos.map((obj) => (
              <Row
              url={obj.url}
              name={obj.name}
              desc={obj.description}
              stack={obj.stack}
            />
            )) : "LOL"}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export async function getStaticProps(){
  const repos = await require("../data/pinned.json");

    return {
      props: {
        repos
      }
    }
}

export default Projects;
