import {
    Box,
    Button,
    VStack,
    Text,
    Center,
    HStack,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Input,
    Alert,
    AlertIcon,

} from "@chakra-ui/react";

import React, { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import { USER_ID } from "./emailkey";


function EmailButton() {
    const { isOpen: isEmailButtonOpen, onOpen: onEmailButtonOpen, onClose: onEmailButtonClose } = useDisclosure(false);
    const [currentStatus, setCurrentStatus] = useState('info')
    const [alertInfo, setAlertInfo] = useState('Gjerne send inn forslag til spm/utfordringer her!')

    emailjs.init(USER_ID);

    function sendEmail() {
        var params = {
            message: document.getElementById("msg").value,
        }
        emailjs.send('service_mi6gtw7', 'template_i3ecfv8', params)
            .then(function (res) {
                //console.log("success", res.status);
            });
    }


    return (
        <>

            <Button
                aria-label='EmailButton'
                leftIcon={< AiOutlineMail />}
                fontSize='40px'
                color='white'
                variant='ghost'
                _hover={{}}
                onClick={(e) => {
                    onEmailButtonOpen();

                }}
            >

                <Modal isOpen={isEmailButtonOpen} onClose={onEmailButtonClose} size="sm" >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader> Kontakt </ModalHeader>
                        <Alert status={currentStatus}>
                            <AlertIcon color="#1966b8" />
                            {alertInfo}
                        </Alert>

                        <Center>
                            <Input mt="15px" w="300px"
                                placeholder='Skriv her' id='msg'
                                onFocus={() => {
                                    setCurrentStatus('info');
                                    setAlertInfo('Gjerne send inn forslag til spm/utfordringer her!');
                                }} />
                        </Center>
                        <ModalCloseButton />
                        <ModalFooter>
                            <Button colorScheme='red' mr={3} onClick={(e) => {
                                sendEmail();
                                document.getElementById(
                                    'msg').value = '';
                                setCurrentStatus('success');
                                setAlertInfo('Meldingen ble sendt!')

                            }}>
                                Send
                            </Button>
                            <Button mr={3} onClick={(e) => {
                                onEmailButtonClose();
                                setAlertInfo('Gjerne send inn forslag til spm/utfordringer her!');
                                //setCurrentStatus('info');


                            }}>
                                Lukk
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Button >
        </>
    )
};


export default EmailButton;

