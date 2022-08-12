import {
  Box,
  Heading,
  VStack,
  Text,
  Center,
  useDisclosure,
  Button,
  HStack,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AlertIcon,
  Alert,
  Input,
} from "@chakra-ui/react";


import React, { useState } from "react";

import { IoArrowBackCircle } from 'react-icons/io5';
import Settings from "./Settings";
import questions from "../Questions";
import { difficulty } from "./Droyhetsskala";
import members from "../Members";
import { glostema } from "./MainPage";
import AddQuestion from "./AddQuestion";

function adjustIndexes2(array, index) {

  array = array.filter(n => n !== undefined)

  for (var i = index; i < array.length; i++) {
    var e = array[i];

    if (!(Object.keys(e).includes("value"))) { //for hvert element som fjernes velges og fjernes hvert egendefinerte spm. De settes inn igjen en index høyere.
      // dette gjøres med alle egendefinerte spm som ligger bak elementet som ble fjernet i listen
      array.splice(i, 1);
      array.splice(i + 1, 0, e);

    }
  }
  return array;
}

function adjustIndexes(array) { //fjerner hvert egendefinerte spm og detter dem inn på indexen de hører til på.
  //console.log("array before adjusting: ", array);
  //array = array.filter(n => n !== undefined)

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element.length === 2) {
      var index = array.indexOf(element);
      array.splice(index, 1)
      array.splice(element[1], 0, element[0]); //kompenserer for hvert element som er lagt inn fra før

      //console.log("element: ", element);
    };
  }

  //console.log("array etter justering: ", array);
  return array;
}


function filterGlos(array) { //filtrerer kun ved initialiseringen 
  var arrayCopy = [...array];
  if (glostema === false) {
    arrayCopy.forEach(element => {
      if (Object.keys(element).includes("value") && Number(Object.values(element)[3]) === 1) { //ser bort fra modifiserte spm 
        // og fjerner alle vanlige spm med gløstema
        const index = arrayCopy.indexOf(element);
        arrayCopy.splice(index, 1);
        //arrayCopy = adjustIndexes(arrayCopy, index);
      }
    }
    );
    arrayCopy = arrayCopy.filter(n => n !== undefined)
  }

  //console.log("array after filterGlos", arrayCopy)
  return arrayCopy;
}


function filterDifficulty(array) { //endrer questions

  array.forEach(element => {

    if (Object.keys(element).includes("value")) { // ser bort fra modifiserte spm

      if (Number(Object.values(element)[1]) > Number(difficulty)) { //fjerner spm med drøyhetsverdi over difficulty
        const index = array.indexOf(element);
        array.splice(index, 1);
        //console.log("element fjernet: ", element);
      };

      if (Number(Object.values(element)[1] === 0 && Number(difficulty) === 3)) { //fjerner spm med drøyhetsgrad 0 ved drøyhetsgrad 3. 
        const index2 = array.indexOf(element);
        array.splice(index2, 1);
        //console.log("element fjernet: ", element);
      };
    };
  });
  //array = array.filter(n => n !== "");

  return array;
}


function shuffle(array) { //hentet fra: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length
  var randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex); //velger et tilfeldig element
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [ //bytter plass på det randomme elementet og elementet på current index
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function getMemberQuestions(array) {
  var arrayCopy = [...array];
  array.forEach(element => {
    shuffle(members);
    //var randMember = members[Math.floor(Math.random() * members.length)];
    if (Object.keys(element).includes("value")) { //ser bort fra alle egendefinerte

      if (Object.values(element)[2].includes("memb")) { //ser bort fra alle som ikke er navn-spesifikke
        if (members.length > 1) {
          var content = Object.values(element)[2].toString().replace(/memb/i, members[0]);
          content = content.replace(/memb2/gi, members[1]);
          var newElement = [content];
        }

        const index = arrayCopy.indexOf(element); //alle navnspesifikke fjernes dersom antall medlemmer er under 2. 
        arrayCopy.splice(index, 1, newElement);
        //adjustIndexes(arrayCopy, index);
      }
    }
  })
  arrayCopy = arrayCopy.filter(n => n !== undefined);
  return arrayCopy;
}

function Question() {

  const [count, setCount] = useState(1);
  const questionsCopy = filterGlos(questions);
  const [filteredQuestions, setFilteredQuestions] = useState(getMemberQuestions(filterDifficulty(questionsCopy)));
  const [content, setContent] = useState(filteredQuestions[0].content);
  const [header, setHeader] = useState(filteredQuestions[0].header);
  const customQuestion = filteredQuestions[count];
  //const header = filteredQuestions[count].header;
  //const content = filteredQuestions[count].content;
  /*
  const description = Object.keys(filteredQuestions[count]).includes("description")
    ? filteredQuestions[count].description
    : undefined;
    */

  console.log({ count });

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

          if (count === 79) {
            setContent("Det var alle spørsmålene. Ha en fin kveld videre!");
            setHeader("Ferdig");
          }

          else if (!(Object.keys(filteredQuestions[count]).includes("header"))) {
            setCount(count + 1);
            setFilteredQuestions(adjustIndexes(getMemberQuestions(filterDifficulty(questionsCopy))));
            setContent(customQuestion);
            setHeader("Utfordring");
          }

          else {
            setCount(count + 1);
            setFilteredQuestions(adjustIndexes(getMemberQuestions(filterDifficulty(questionsCopy))));
            setContent(filteredQuestions[count].content);
            setHeader(filteredQuestions[count].header);

          }

          console.log({ filteredQuestions });

        }
      }
    >
      <VStack spacing={5} w="100%">

        <Heading color="white" textAlign="center">{header}</Heading>

        <Box pb="50px" >
          <Text color="white" fontSize='xl' textAlign="center"
            w="100%"
          >{content}  </Text>
        </Box>
        <AddQuestion count={count}> </AddQuestion>

        <Settings  ></Settings>

      </VStack>

    </Center >
  );

};

export default Question;
