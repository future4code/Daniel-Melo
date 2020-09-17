import React, { useState, useEffect } from 'react';
import {
  Button, Input, FormControl, FormLabel, Flex, Select, Text, Stack, useToast,
} from '@chakra-ui/core';
import useForm from '../hooks/useForm';
import CountriesOptions from './CountriesOptions';
import api from '../services/api';
import axiosErrorHandler from '../utils/axiosErrorHandler';

const ApplicationForm = () => {
  const toast = useToast();
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState();
  const [form, setForm, resetForm] = useForm({
    name: '',
    age: '',
    profession: '',
    country: '',
    applicationText: '',
    tripId: '',
  });

  useEffect(() => {
    api.get('/trips')
      .then(({ data }) => setTrips(data.trips))
      .catch(axiosErrorHandler);
  }, []);

  useEffect(() => {
    const choosenTrip = trips.find((trip) => form.tripId === trip.id);
    setCurrentTrip(choosenTrip);
  }, [form, trips]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    try {
      api.post(`/trips/${form.tripId}/apply`, body);
      toast({
        position: 'top-right',
        title: 'Aplicação submetida com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      axiosErrorHandler(error);
      toast({
        position: 'top-right',
        title: 'Erro ao submeter aplicação',
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
      gridTemplateRows="1fr 1fr 1fr 2fr 1fr"
      gridTemplateAreas="
        'name age profession country'
        'applicationText applicationText applicationText applicationText'
        'trip trip trip trip'
        'tripDetail tripDetail tripDetail tripDetail'
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
          minLength={3}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="age">
        <FormLabel htmlFor="age" color="yellow.500">Idade</FormLabel>
        <Input
          name="age"
          id="age"
          type="number"
          value={form.age}
          onChange={setForm}
          min={18}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="profession">
        <FormLabel htmlFor="profession" color="yellow.500">Profissão</FormLabel>
        <Input
          name="profession"
          id="profession"
          type="text"
          value={form.profession}
          onChange={setForm}
          minLength={10}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="country">
        <FormLabel htmlFor="country" color="yellow.500">País</FormLabel>
        <Select name="country" id="country" type="text" value={form.country} onChange={setForm} isRequired>
          <option style={{ color: 'black' }} value="" disabled>Selecione seu país</option>
          <CountriesOptions />
        </Select>
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="applicationText">
        <FormLabel htmlFor="applicationText" color="yellow.500">Apresentação</FormLabel>
        <Input
          name="applicationText"
          id="applicationText"
          type="text"
          value={form.applicationText}
          onChange={setForm}
          minLength={30}
          isRequired
        />
      </Flex>

      <Flex as="fieldset" direction="column" gridArea="trip">
        <FormLabel htmlFor="trip" color="yellow.500">Trip</FormLabel>
        <Select name="tripId" id="trip" type="text" value={form.tripId} onChange={setForm} isRequired>
          <option style={{ color: 'black' }} value="" disabled>Seleciona sua viagem</option>
          {trips.map((trip) => (
            <option key={trip.id} style={{ color: 'black' }} value={trip.id}>
              {trip.name}
            </option>
          ))}
        </Select>
      </Flex>

      <Stack gridArea="tripDetail">
        <Text color="yellow.500">
          Descrição:
          {' '}
          <Text as="span" color="white">{currentTrip && currentTrip.description}</Text>
        </Text>
        <Text color="yellow.500">
          Destino:
          {' '}
          <Text as="span" color="white">{currentTrip && currentTrip.planet}</Text>
        </Text>
        <Text color="yellow.500">
          Data:
          {' '}
          <Text as="span" color="white">{currentTrip && currentTrip.date}</Text>
        </Text>
        <Text color="yellow.500">
          Duração em dias:
          {' '}
          <Text as="span" color="white">{currentTrip && currentTrip.durationInDays}</Text>
        </Text>
      </Stack>

      <Button justifySelf="center" gridArea="button" type="submit" variantColor="yellow">
        APLICAR
      </Button>
    </FormControl>
  );
};

export default ApplicationForm;
