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
    Text,
    AlertIcon,
    Alert,
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
    const [currentStatus, setCurrentStatus] = useState('info')
    const [alertInfo, setAlertInfo] = useState('Utfordringen blandes med resten av utfordringene i spillet')

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

                            <Button colorScheme='blue' mr={3} onClick={() => {
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
    );
}

export default AddQuestion;
