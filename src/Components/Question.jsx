import {
  Box,
  Button,
  Heading,
  VStack,
  Text,

  useDisclosure,
  Center,

} from "@chakra-ui/react";



import React, { useState } from "react";
import AddQuestion from "./AddQuestion";

import Settings from "./Settings";
import questions from "../Questions";
import { newDifficulty } from "./Droyhetsskala";
import members from "../Members";



function filterDifficulty(array) {

  console.log("newDifficulty:" + newDifficulty)
  array.forEach(element => {

    if (Object.keys(element).includes("value")) {
      //console.log("value funker");

      if (Number(Object.values(element)[1]) > Number(newDifficulty)) {
        const index = array.indexOf(element);
        array.splice(index, 1);
        console.log("lengde: " + array.length + " (1 element ble fjernet)");
      }
    }
  });
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

function setMemberQuestions(array) {


  array.forEach(element => {
    shuffle(members); //evt members= shuffle(members);

    //var randMember = members[Math.floor(Math.random() * members.length)];
    if (Object.keys(element).includes("value")) { //ser bort fra alle egendefinerte

      if (Object.values(element)[2].includes("memb")) { //ser bort fra alle som ikke er navn-spesifikke

        if (members.length > 1) {
          var newElement = Object.values(element)[2].toString().replace(/memb/i, members[0]);
          newElement = newElement.replace(/memb2/gi, members[1]);
          array = array.concat(newElement);
          console.log("navn spesifisert?");
          console.log(newElement);
        }
        const index = array.indexOf(element); //alle navnspesifikke fjernes dersom antall medlemmer er under 2. 
        array.splice(index, 1);               // hvis ikke concattes de til listen for de fjernes (over)
      }
    }
  })
  array.filter(n => n);

  return array;
}


function Question() {
  const [count, setCount] = useState(0);
  const [difficulty, setDifficulty] = useState(5);
  const [filteredQuestions, setFilteredQuestions] = useState(setMemberQuestions(questions));
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(false);

  const customQuestion = filteredQuestions[count];
  const header = filteredQuestions[count].header;
  const content = filteredQuestions[count].content;
  const description = Object.keys(filteredQuestions[count]).includes("description")
    ? filteredQuestions[count].description
    : undefined;


  if (!(Object.keys(filteredQuestions[count]).includes("header"))) {
    return (

      <Button
        bgGradient='linear(to-t, #f56038, #ffcb7e)'
        _hover={{ bg: "" }}
        variant='ghost'
        h="107vh"
        w="100%"
        onClick={() => setCount(count + 1)}
      >

        <Box w='0px'>
          <VStack spacing={4}>
            <Heading></Heading>

            <Text h='30px' as='i' fontSize='xl' color='white'  > {customQuestion} </Text>

            <AddQuestion count={count}></AddQuestion>

            <Settings onClick={() => setFilteredQuestions(setMemberQuestions(filteredQuestions))} ></Settings>


          </VStack>

        </Box>

      </Button >
    )
  }

  else {

    return (

      <Center
        bgGradient='linear(to-tr, #f56038, #ffca7a)'
        _hover={{ bg: "" }}
        variant='outline'
        h="100%"
        w="100%"
        padding="5"
        onClick={() => setCount(count + 1)}
      >

        <VStack spacing={4} w="100%">

          <Heading color="white" textAlign="center">{header}</Heading>


          <Text color="white" fontSize='xl' textAlign="center"
            w="100%"

          >{content}  </Text>


          <Text h='30px' as='i' color="white">{description}</Text>

          <AddQuestion count={count}></AddQuestion>
          <Settings onClick={() => setFilteredQuestions(setMemberQuestions(filteredQuestions))}></Settings>

        </VStack>



      </Center >
    );

  }

};


export default Question;
