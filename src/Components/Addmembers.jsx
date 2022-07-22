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


function Addmembers() {
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

  console.log(isOpen)


  return (
    <>
      <Button size='lg' onClick={onOpen}>Legg til spillere

        <Modal isOpen={isOpen} onClose={onClose} size="xs" >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Legg til spiller</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <Input placeholder='Navn' id='name' onFocus="this.value=''" onChange={(event) => setLatestMember(event.target.value)} />


            </ModalBody>

            <ModalFooter>

              <HStack parcing='10px'>
                <Box w='100px'>
                  {members.join(", ")}
                </Box>

                <Button variant='ghost' onClick={() => {
                  if (!(latestMember.length === 0)) {
                    addMember(latestMember)
                    setLatestMember("");
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
    </>
  );
}

export default Addmembers;
