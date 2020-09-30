import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Textarea,
  FormControl,
} from '@chakra-ui/core';
import { AddIcon } from '@chakra-ui/icons';
import React, { useState, useRef } from 'react';
import useForm from '../hooks/useForm';
import { usePosts } from '../contexts/PostsProvider';

const CreatePostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const { createPost } = usePosts();
  const [form, setForm, resetForm] = useForm({
    title: '',
    text: '',
  });

  const handleDrawerClose = () => {
    onClose();
    resetForm();
  };

  const post = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await createPost(form);
    setIsLoading(false);
    handleDrawerClose();
  };

  return (
    <>
      <Button alignSelf="flex-start" leftIcon={<AddIcon />} colorScheme="blue" onClick={onOpen}>
        Novo post
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={handleDrawerClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Criar Novo Post
            </DrawerHeader>

            <DrawerBody>
              <FormControl
                as="form"
                display="flex"
                flexDirection="column"
                onSubmit={post}
              >
                <Input
                  mt={4}
                  id="title"
                  name="title"
                  ref={firstField}
                  placeholder="Título"
                  value={form.title}
                  onChange={setForm}
                  isRequired
                />

                <Textarea
                  mt={4}
                  height="50vh"
                  id="post-text"
                  name="text"
                  placeholder="Texto"
                  value={form.text}
                  onChange={setForm}
                  isRequired
                />

                <Button
                  isLoading={isLoading}
                  mt={4}
                  type="submit"
                  colorScheme="blue"
                >
                  Postar
                </Button>
              </FormControl>
            </DrawerBody>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default CreatePostForm;
