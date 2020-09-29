import React, { useState, useEffect } from 'react';
import {
  Button, FormControl, useToast,
} from '@chakra-ui/core';
import InputField from './InputField';
import SelectField from './SelectField';
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

    try {
      await api.post('/trips', form);
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
      <InputField
        gridArea="name"
        inputId="name"
        label="Nome"
        value={form.name}
        onChange={setForm}
        inputProps={{
          type: 'text',
          minLength: 5,
          isRequired: true,
        }}
      />

      <InputField
        gridArea="date"
        inputId="date"
        label="Data"
        value={form.date}
        onChange={setForm}
        inputProps={{
          type: 'date',
          min: today,
          isRequired: true,
        }}
      />

      <InputField
        gridArea="durationInDays"
        inputId="durationInDays"
        label="Duração (em dias)"
        value={form.durationInDays}
        onChange={setForm}
        inputProps={{
          type: 'number',
          min: 50,
          isRequired: true,
        }}
      />

      <SelectField
        gridArea="planet"
        selectId="planet"
        label="Planeta Destino"
        placeholder="Selecione o planeta"
        value={form.planet}
        onChange={setForm}
        isRequired
        options={<PlanetOptions />}
      />

      <InputField
        gridArea="description"
        inputId="description"
        label="Descrição"
        value={form.description}
        onChange={setForm}
        inputProps={{
          type: 'text',
          minLength: 30,
          isRequired: true,
        }}
      />

      <Button
        mt={8}
        justifySelf="center"
        gridArea="button"
        type="submit"
        variantColor="yellow"
      >
        CRIAR VIAGEM
      </Button>
    </FormControl>
  );
};

export default ApplicationForm;
