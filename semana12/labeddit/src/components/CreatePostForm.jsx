import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Input,
  Textarea,
} from '@chakra-ui/core';
import { AddIcon } from '@chakra-ui/icons';
import React, { useRef } from 'react';

const CreatePostForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Button alignSelf="flex-start" leftIcon={<AddIcon />} colorScheme="blue" onClick={onOpen}>
        Novo post
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Criar Novo Post
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={4}>
                <Input
                  ref={firstField}
                  placeholder="Título"
                />

                <Textarea placeholder="Texto" height="50vh" />
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="blue">Postar</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default CreatePostForm;
