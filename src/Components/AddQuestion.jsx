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

    const [latestQuestion, setLatestQuestion] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure(false);
    const [currentStatus, setCurrentStatus] = useState('info')
    const [alertInfo, setAlertInfo] = useState('Utfordringen blandes med resten av utfordringene i spillet')

    function addQuestion(question) {
        var rand_index = Math.floor(Math.random() * ((count + 10) - count + 2)) + count + 1; //tall mellom count+1 og count+10
        //var rand_index = count + 2;
        questions.splice(rand_index, 0, question);
        console.log("count: ", count);
        console.log("index: ", rand_index);
    }


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
                        <Input
                            placeholder='Maria må chugge drikken sin'
                            id='name'

                            onFocus={() => {
                                setCurrentStatus('info');
                                setAlertInfo('Utfordringen blandes med resten av utfordringene i spillet');
                            }}
                            onChange={
                                (event) => {
                                    setLatestQuestion(event.target.value);
                                }
                            } />

                    </ModalBody>
                    <ModalFooter>

                        <HStack parcing='10px'>
                            <Box w='200px'>

                            </Box>

                            <Button
                                variant='ghost'
                                colorScheme='red'
                                onClick={() => {
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
                            <Button mr={3} onClick={() => {
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
        </Button >
    );
}

export default AddQuestion;
