import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";

export const SearchModal = ({ isOpen, onClose, setSearchTerm }) => {
  const [value, setValue] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Search:"
            bg={"gray.50"}
            color={"black"}
            fontWeight={400}
            variant="outline"
            p={3}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></Input>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
            variant="ghost"
            onClick={() => {
              setValue("");
              setSearchTerm(value);
              onClose();
            }}
          >
            Search
          </Button>
          <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
