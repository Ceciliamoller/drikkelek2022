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
import React, { useState } from "react";
import members from "../Members";


function Addmembers({ buttonColor, textColor }) {
  //kilde: https://chakra-ui.com/docs/components/modal

  //const [members, setMembers] = useState([]);
  //const [membersCopy, setMembersCopy] = useState([]);
  const [latestMember, setLatestMember] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  function addMember(member) {
    members.push(member);
    //setMembers(members.concat(member))
    members.join(", ");
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
    <>
      <Button w="200px" color={textColor} colorScheme={buttonColor} _hover={{}} onClick={onOpen}>Legg til spillere

        <Modal scrollBehavior="outside" isOpen={isOpen} onClose={onClose} size="xs" >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Legg til spiller</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <Input
                placeholder='Navn'
                id='name'
                onFocus="this.value=''"
                onChange={(event) => setLatestMember(event.target.value)} />

            </ModalBody>

            <ModalFooter>

              <HStack parcing='10px'>
                <Box w='100px'>
                  {members.join(", ")}
                </Box>

                <Button
                  colorScheme='red'
                  onClick={() => {
                    if (!(latestMember.length === 0)) {
                      addMember(latestMember)
                      setLatestMember("");
                      document.getElementById(
                        'name').value = '';
                    }
                  }

                  }>Legg til</Button>

                <Button variant='outline' mr={3} onClick={onClose}>
                  Lukk
                </Button>
              </HStack>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </Button>
    </>
  );
}

export default Addmembers;
