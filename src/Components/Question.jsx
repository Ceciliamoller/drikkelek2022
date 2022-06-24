import {
  Box,
  Button,
  Heading,
  TextStack,
  HStack,
  VStack,
  Text,
  StackDivider,
  Center,
} from "@chakra-ui/react";

import questions from "../Questions";
import React, { useState } from "react";
import { extendTheme } from "@chakra-ui/react";

function Question() {
  const [count, setCount] = useState(0);
  const header = questions[count].header;
  const content = questions[count].content;
  const description = Object.keys(questions[count]).includes("description")
    ? questions[count].description
    : undefined;

  return (
    <Button
      bg="red.500"
      _hover={{ bg: "" }}
      h="100vh"
      w="100%"
      onClick={() => setCount(count + 1)}
    >
      <Box>
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
          <Heading>{header}</Heading>

          <Text>{content}</Text>

          <Text>{description}</Text>
        </VStack>
      </Box>
    </Button>
  );
}

export default Question;
