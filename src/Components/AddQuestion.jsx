import {
    Box,
    Button,
    HStack,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input,
} from "@chakra-ui/react";
//import circleLogo from '../Assets/circleLogo.jpg';
import questions from "../Questions";
import React, { useState } from "react";
import { HiPlusSm } from 'react-icons/hi';

function AddQuestion({ count }) {
    //kilde: https://chakra-ui.com/docs/components/modal

    //const [questions, setquestions] = useState([]);
    //const [questionsCopy, setquestionsCopy] = useState([]);
    const [latestQuestion, setLatestQuestion] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure(false);

    function addQuestion(question) {
        var rand_index = Math.floor(Math.random() * ((count + 11) - count + 2)) + count + 1; //tall mellom count+1 og count+11
        questions.splice(rand_index, 0, question);
        //setquestions(questions.concat(Question))
    }

    /*

    function clearF() { //kode hentet fra https://www.delftstack.com/howto/javascript/javascript-clear-input/
        var grab = document.getElementBy("name");
        if (grab.target.value !== "") {
            grab.target.value = "";
        }
    }
*/


    return (
        <Button w='200px' rightIcon={<HiPlusSm />} onClick={onOpen} variant='solid' aria-label='Search database' fontSize='18px'> Legg til spørsmål
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Legg spørsmål/utfordring</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Input placeholder='Spørsmål' id='name' onChange={
                            (event) => setLatestQuestion(event.target.value)} />


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
                                }
                            }

                            }>Legg til</Button>

                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Lukk
                            </Button>
                        </HStack>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Button>
    );
}

export default AddQuestion;
