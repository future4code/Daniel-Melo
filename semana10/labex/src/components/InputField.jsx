/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Flex, FormLabel, Input } from '@chakra-ui/core';

const InputField = ({
  gridArea, inputId, label, value, onChange, inputProps,
}) => (
  <Flex
    as="fieldset"
    direction="column"
    gridArea={gridArea}
  >
    <FormLabel htmlFor={inputId} color="yellow.500">{label}</FormLabel>
    <Input
      name={inputId}
      id={inputId}
      value={value}
      onChange={onChange}
      {...inputProps}
    />

  </Flex>
);

export default InputField;
