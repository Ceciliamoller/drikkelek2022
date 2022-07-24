import {
  Box,
  Heading,
  VStack,
  Text,
  Center,

} from "@chakra-ui/react";


import React, { useState } from "react";
import AddQuestion from "./AddQuestion";

import Settings from "./Settings";
import questions from "../Questions";
import { difficulty } from "./Droyhetsskala";
import members from "../Members";



function filterDifficulty(array) {
  console.log("difficulty:" + difficulty)
  array.forEach(element => {
    if (Object.keys(element).includes("value")) {
      //console.log("hei");

      if (Number(Object.values(element)[1]) > Number(difficulty)) {
        const index = array.indexOf(element);
        array.splice(index, 1);
        //console.log("element fjernet, pga difficulty: ", Object.values(element)[1]);
      }
    }
  });
  array = array.filter(n => n);
  return array;
}

function shuffle(array) { //hentet fra: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }


  return array;
}


function getMemberQuestions(array) {

  var arrayCopy = [...array];

  //array = array.filter(n => n);
  console.log("før shuffle: ", array)

  array.forEach(element => {
    shuffle(members);

    //var randMember = members[Math.floor(Math.random() * members.length)];
    if (Object.keys(element).includes("value")) { //ser bort fra alle egendefinerte

      if (Object.values(element)[2].includes("memb")) { //ser bort fra alle som ikke er navn-spesifikke
        if (members.length > 1) {
          var newElement = Object.values(element)[2].toString().replace(/memb/i, members[0]);
          newElement = newElement.replace(/memb2/gi, members[1]);
        }
        const index = arrayCopy.indexOf(element); //alle navnspesifikke fjernes dersom antall medlemmer er under 2. 
        arrayCopy.splice(index, 1, newElement);
      }
    }
  })

  arrayCopy = arrayCopy.filter(n => n !== undefined);
  return arrayCopy;
}


function Question() {
  //var questionsCopy = [...questions];
  const [count, setCount] = useState(0);
  //const [difficulty, setDifficulty] = useState(5);
  const [filteredQuestions, setFilteredQuestions] = useState(getMemberQuestions(questions));
  //const { isOpen, onOpen, onClose } = useDisclosure(false);
  //const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(false);


  const customQuestion = filteredQuestions[count];
  //const header = filteredQuestions[count].header;
  //const content = filteredQuestions[count].content;
  /*
  const description = Object.keys(filteredQuestions[count]).includes("description")
    ? filteredQuestions[count].description
    : undefined;
    */

  console.log("topp: ", filteredQuestions);

  if (count === filteredQuestions.length - 1) {

    return (

      <Center
        bgGradient='linear(to-tr, #ee7e0f, #fbb564)'
        _hover={{ bg: "" }}
        variant='outline'
        h="100%"
        w="100%"
        padding="5"
      >
        <VStack spacing={5} w="100%">

          <Heading color="white" textAlign="center"> Ferdig </Heading>

          <Box pb="50px" >
            <Text color="white" fontSize='xl' textAlign="center"
              w="100%"

            > {"Det var alle spørsmålene. Ha en fin kveld videre!"}  </Text>
          </Box>


        </VStack>

      </Center >
    )

  };


  if (!(Object.keys(filteredQuestions[count]).includes("header"))) {
    return (

      <Center
        bgGradient='linear(to-tr, #ee7e0f, #fbb564)'
        _hover={{ bg: "" }}
        variant='outline'
        h="100%"
        w="100%"
        padding="5"
        onClick={
          () => {
            setCount(count + 1);
            setFilteredQuestions(getMemberQuestions(questions)); //Dårlig kode å gjøre dette for hvert spm??
          }
        }
      >
        <VStack spacing={5} w="100%">

          <Heading color="white" textAlign="center"> Utfordring </Heading>

          <Box pb="50px" >
            <Text color="white" fontSize='xl' textAlign="center"
              w="100%"

            >{customQuestion}  </Text>
          </Box>

          <AddQuestion count={count} ></AddQuestion>
          <Settings  ></Settings>

        </VStack>

      </Center >
    )
  }

  else {

    return (

      <Center
        bgGradient='linear(to-tr, #ee7e0f, #fbb564)'
        _hover={{ bg: "" }}
        variant='outline'
        h="100%"
        w="100%"
        padding="5"
        onClick={
          () => {


            setCount(count + 1);
            setFilteredQuestions(getMemberQuestions(questions)); //ikke filtrer den allerede filtrerte listen
            //setFilteredQuestions(filterDifficulty(filteredQuestions)); //Dårlig kode å gjøre dette for hvert spm??


          }
        }
      >
        <VStack spacing={5} w="100%">

          <Heading color="white" textAlign="center">{filteredQuestions[count].header}</Heading>

          <Box pb="50px" >
            <Text color="white" fontSize='xl' textAlign="center"
              w="100%"
            >{filteredQuestions[count].content}  </Text>
          </Box>

          <AddQuestion count={count} ></AddQuestion>
          <Settings  ></Settings>


        </VStack>

      </Center >
    );

  }

};


export default Question;
