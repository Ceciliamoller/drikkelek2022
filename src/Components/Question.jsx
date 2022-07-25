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
import { glostema } from "./MainPage";

function filterGlos(array) { //filtrerer kun ved initialiseringen 
  //console.log("array før: ", array);
  console.log("glostema: ", glostema);
  var arrayCopy = [...array];
  if (glostema === false) {

    arrayCopy.forEach(element => {
      if (Number(Object.values(element)[3]) === 1) {
        const index = arrayCopy.indexOf(element);
        arrayCopy.splice(index, 1, "");
      }
    }
    );
    arrayCopy = arrayCopy.filter(n => n !== "")
  }
  //console.log("arrayCopy filtered on gløs-theme: ", arrayCopy);
  return arrayCopy;
}

function filterDifficulty(array) { //endrer questions

  //console.log("difficulty:" + difficulty)
  array.forEach(element => {
    if (Object.keys(element).includes("value")) { // ser bort fra modifiserte spm
      //console.log("hei");

      if (Number(Object.values(element)[1]) > Number(difficulty)) { //fjerner spm med drøyhetsverdi over difficulty
        const index = array.indexOf(element);
        array.splice(index, 1, "");
        //console.log("element fjernet, pga difficulty: ", Object.values(element)[1]);
      }
    }
  });
  //console.log("arraycopy filtrert: ", arrayCopy);
  array = array.filter(n => n !== "");
  //console.log("arraycopy filtrert ferdig: ", arrayCopy);
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

  const [count, setCount] = useState(1);
  //const [difficulty, setDifficulty] = useState(5);
  const questionsCopy = filterGlos(questions);

  const [filteredQuestions, setFilteredQuestions] = useState(getMemberQuestions(questionsCopy));
  const [content, setContent] = useState(filteredQuestions[0].content);
  const [header, setHeader] = useState(filteredQuestions[0].header);
  console.log("filteredquestions topp: ", filteredQuestions);

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

          //console.log("count øverst: ", count);
          setCount(count + 1);
          setFilteredQuestions(getMemberQuestions(filterDifficulty(questionsCopy)));

          console.log("filteredquestions: ", filteredQuestions);
          if (count === filteredQuestions.length - 1) {
            setContent("Det var alle spørsmålene. Ha en fin kveld videre!");
            setHeader("Ferdig");
          }
          if (!(Object.keys(filteredQuestions[count]).includes("header"))) {
            setContent(customQuestion);
            setHeader("Utfordring");
          }

          else {
            setContent(filteredQuestions[count].content);
            setHeader(filteredQuestions[count].header);

          }
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

        <AddQuestion count={count} ></AddQuestion>
        <Settings  ></Settings>


      </VStack>

    </Center >
  );

};




export default Question;
