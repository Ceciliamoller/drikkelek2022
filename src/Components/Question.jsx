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

import { HiPlusSm } from 'react-icons/hi';
import Settings from "./Settings";
import questions from "../Questions";
import { difficulty } from "./Droyhetsskala";
import members from "../Members";
import { glostema } from "./MainPage";

function filterGlos(array) { //filtrerer kun ved initialiseringen 

  var arrayCopy = [...array];
  if (glostema === false) {
    arrayCopy.forEach(element => {
      if (Object.keys(element).includes("value") && Number(Object.values(element)[3]) === 1) { //ser bort fra modifiserte spm 
        // og fjerner alle vanlige spm med gløstema
        const index = arrayCopy.indexOf(element);
        arrayCopy.splice(index, 1, "");
        array.forEach(e => { //for hvert element som fjernes velges og fjernes hvert egendefinerte spm. De settes inn igjen en index høyere. 
          if (!(Object.keys(e).includes("value"))) {
            const index_customQuestion = array.indexOf(e);
            array.splice(index_customQuestion, 1);
            array.splice(index_customQuestion + 1, 0, e);
          }
        })
      }
    }
    );
    arrayCopy = arrayCopy.filter(n => n !== "")
  }
  return arrayCopy;
}


function filterDifficulty(array) { //endrer questions

  array.forEach(element => {
    if (Object.keys(element).includes("value")) { // ser bort fra modifiserte spm
      if (Number(Object.values(element)[1]) > Number(difficulty)) { //fjerner spm med drøyhetsverdi over difficulty
        const index = array.indexOf(element);
        array.splice(index, 1);
        if (Number(Object.values(element)[1] === 0 && Number(difficulty) === 3)) { //fjerner spm med drøyhetsgrad 0 ved drøyhetsgrad 3. 
          const index = array.indexOf(element);
          array.splice(index, 1);
        }
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
  function addQuestion(question) {
    var rand_index = Math.floor(Math.random() * ((count + 10) - count + 2)) + count + 1; //tall mellom count+1 og count+10
    questions.splice(rand_index, 0, question);
    console.log("count: ", count);
    console.log("index: ", rand_index);
  }

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

  const [latestQuestion, setLatestQuestion] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const [currentStatus, setCurrentStatus] = useState('info');
  const [alertInfo, setAlertInfo] = useState('Utfordringen blandes med resten av utfordringene i spillet');


  console.log({ questions });
  console.log({ filteredQuestions });
  console.log({ count })

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
            setFilteredQuestions(getMemberQuestions(filterDifficulty(questionsCopy)));
            setContent(customQuestion);
            setHeader("Utfordring");
          }

          else {
            setCount(count + 1);
            setFilteredQuestions(getMemberQuestions(filterDifficulty(questionsCopy)));
            setContent(filteredQuestions[count].content);
            setHeader(filteredQuestions[count].header);
            console.log({ count });
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
        <Button w='200px' rightIcon={<HiPlusSm />}
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          variant='solid' aria-label='Search database' fontSize='18px'> Legg til utfordring
          <Modal isOpen={isOpen} onClose={onClose} size="xs" >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Legg til utfordring</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Alert status={currentStatus}>
                  <AlertIcon color="#1966b8" />
                  {alertInfo}
                </Alert>
                <Input mt="20px" placeholder='Maria må chugge drikken sin' id='name' onChange={
                  (event) => {
                    setLatestQuestion(event.target.value);
                  }
                } />

              </ModalBody>
              <ModalFooter>

                <HStack parcing='10px'>
                  <Box w='200px'>
                  </Box>

                  <Button variant='ghost' onClick={() => {
                    if (!(latestQuestion.length === 0)) {
                      addQuestion(latestQuestion)
                      setLatestQuestion("");
                      document.getElementById(
                        'name').value = '';
                      setCurrentStatus('success');
                      setAlertInfo('Utfordringen ble lagt til!')
                    }
                  }

                  }>Legg til</Button>

                  <Button colorScheme='red' mr={3} onClick={() => {
                    onClose()
                    setCurrentStatus('info');
                    setAlertInfo('Utfordringen blandes med resten av utfordringene i spillet');
                  }}>
                    Lukk
                  </Button>
                </HStack>

              </ModalFooter>
            </ModalContent>
          </Modal>
        </Button>
        <Settings  ></Settings>
      </VStack>
    </Center >
  );

};

export default Question;
