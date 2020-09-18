import React, { useState, useEffect } from 'react';
import {
  Button, FormControl, Text, Stack, useToast,
} from '@chakra-ui/core';
import InputField from './InputField';
import SelectField from './SelectField';
import useForm from '../hooks/useForm';
import CountriesOptions from './CountriesOptions';
import api from '../services/api';
import axiosErrorHandler from '../utils/axiosErrorHandler';

const ApplicationForm = () => {
  const toast = useToast();
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState({
    description: '',
    planet: '',
    date: '',
    durationInDays: '',
  });
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
    setCurrentTrip((state) => choosenTrip || state);
  }, [form, trips]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post(`/trips/${form.tripId}/apply`, form);
      toast({
        position: 'top',
        title: 'Aplicação submetida com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      axiosErrorHandler(error);
      toast({
        position: 'top',
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

      <InputField
        gridArea="name"
        inputId="name"
        label="Nome"
        value={form.name}
        onChange={setForm}
        inputProps={{
          type: 'text',
          minLength: 3,
          isRequired: true,
        }}
      />

      <InputField
        gridArea="age"
        inputId="age"
        label="Idade"
        value={form.age}
        onChange={setForm}
        inputProps={{
          type: 'number',
          min: 18,
          isRequired: true,
        }}
      />

      <InputField
        gridArea="profession"
        inputId="profession"
        label="Profissão"
        value={form.profession}
        onChange={setForm}
        inputProps={{
          type: 'text',
          minLength: 10,
          isRequired: true,
        }}
      />

      <SelectField
        gridArea="country"
        selectId="country"
        label="País"
        placeholder="Selecione seu país"
        value={form.country}
        onChange={setForm}
        isRequired
        options={<CountriesOptions />}
      />

      <InputField
        gridArea="applicationText"
        inputId="applicationText"
        label="Apresentação"
        value={form.applicationText}
        onChange={setForm}
        inputProps={{
          type: 'text',
          minLength: 30,
          isRequired: true,
        }}
      />

      <SelectField
        gridArea="trip"
        selectId="tripId"
        label="Trip"
        placeholder="Selecione sua viagem"
        value={form.tripId}
        onChange={setForm}
        isRequired
        options={
            trips.map((trip) => (
              <option key={trip.id} style={{ color: 'black' }} value={trip.id}>
                {trip.name}
              </option>
            ))
          }
      />

      <Stack gridArea="tripDetail">
        <Text color="yellow.500">
          Descrição:
          {' '}
          <Text as="span" color="white">{currentTrip.description}</Text>
        </Text>
        <Text color="yellow.500">
          Destino:
          {' '}
          <Text as="span" color="white">{currentTrip.planet}</Text>
        </Text>
        <Text color="yellow.500">
          Data:
          {' '}
          <Text as="span" color="white">{currentTrip.date}</Text>
        </Text>
        <Text color="yellow.500">
          Duração em dias:
          {' '}
          <Text as="span" color="white">{currentTrip.durationInDays}</Text>
        </Text>
      </Stack>

      <Button justifySelf="center" gridArea="button" type="submit" variantColor="yellow">
        APLICAR
      </Button>
    </FormControl>
  );
};

export default ApplicationForm;
