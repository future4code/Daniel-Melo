import React from 'react';
import { Flex, FormLabel, Select } from '@chakra-ui/core';

const SelectField = ({
  gridArea, selectId, label, placeholder, value, onChange, isRequired, options,
}) => (
  <Flex as="fieldset" direction="column" gridArea={gridArea}>
    <FormLabel htmlFor="trip" color="yellow.500">{label}</FormLabel>
    <Select
      name={selectId}
      id={selectId}
      value={value}
      onChange={onChange}
      isRequired={isRequired}
    >
      <option style={{ color: 'black' }} value="" disabled>
        {placeholder}
      </option>
      {options}
    </Select>
  </Flex>
);

export default SelectField;
