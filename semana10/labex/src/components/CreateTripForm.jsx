import React, { useState, useEffect } from 'react';
import {
  Button, Input, FormControl, FormLabel, Flex, Select, useToast,
} from '@chakra-ui/core';
import useForm from '../hooks/useForm';
import PlanetOptions from './PlanetOptions';
import api from '../services/api';
import axiosErrorHandler from '../utils/axiosErrorHandler';

const ApplicationForm = () => {
  const toast = useToast();
  const [today, setToday] = useState('');
  const [form, setForm, resetForm] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  });

  useEffect(() => {
    const date = new Date();

    const dd = String(date.getDate()).length === 1 ? `0${String(date.getDate())}` : String(date.getDate());
    const mm = String(date.getMonth() + 1).length === 1 ? `0${String(date.getMonth() + 1)}` : String(date.getMonth() + 1);
    const yyyy = String(date.getFullYear());

    setToday(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    try {
      api.post('/trips', body);
      toast({
        position: 'top',
        title: 'Viagem criada com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      axiosErrorHandler(error);
      toast({
        position: 'top',
        title: 'Erro ao criar viagem',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    resetForm();
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleSubmit}
      display="grid"
      gridGap={3}
      gridTemplateColumns="repeat(4, 1fr)"
      gridTemplateRows="1fr 1fr 1fr"
      gridTemplateAreas="
        'name date durationInDays planet'
        'description description description description'
        '. button button .'
        "
    >
      <Flex as="fieldset" direction="column" gridArea="name">
        <FormLabel htmlFor="name" color="yellow.500">Nome</FormLabel>
        <Input
          name="name"
          id="name"
          type="text"
          value={form.name}
          onChange={setForm}
          minLength={5}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="date">
        <FormLabel htmlFor="date" color="yellow.500">Data</FormLabel>
        <Input
          name="date"
          id="date"
          type="date"
          value={form.date}
          min={today}
          onChange={setForm}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="durationInDays">
        <FormLabel htmlFor="durationInDays" color="yellow.500">Duração (em dias)</FormLabel>
        <Input
          name="durationInDays"
          id="durationInDays"
          type="number"
          value={form.durationInDays}
          onChange={setForm}
          min={50}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="planet">
        <FormLabel htmlFor="planet" color="yellow.500">Planeta Destino</FormLabel>
        <Select name="planet" id="planet" type="text" value={form.planet} onChange={setForm} isRequired>
          <option style={{ color: 'black' }} value="" disabled>Selecione o planeta</option>
          <PlanetOptions />
        </Select>
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="description">
        <FormLabel htmlFor="description" color="yellow.500">Descrição</FormLabel>
        <Input
          name="description"
          id="description"
          type="text"
          value={form.description}
          onChange={setForm}
          minLength={30}
          isRequired
        />
      </Flex>

      <Button mt={8} justifySelf="center" gridArea="button" type="submit" variantColor="yellow">
        CRIAR VIAGEM
      </Button>
    </FormControl>
  );
};

export default ApplicationForm;
