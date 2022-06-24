//import logo from './logo.svg';
import "./App.css";
import React from "react";
import HelloWorld from "./Components/HelloWorld";
import CounterExample from "./Components/CounterExample";
import { Box, extendTheme, Center, Button } from "@chakra-ui/react";
import customTheme from "./extendTheme";
import Banner from "./Components/Banner";
import Question from "./Components/Question";
import Start from "./Components/Start";

function App() {
  return (
    <Center bg="white" h="100vh" w="100%">
      <Question />
    </Center>
  );
}

export default App;
