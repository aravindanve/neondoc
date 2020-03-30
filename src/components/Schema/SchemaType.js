import React from 'react';
import { Box } from 'rebass';

export const SchemaType = ({ required, children, ...props }) => (
  <Box
    as="span"
    name="SchemaType"
    sx={{
      color: required === true ? 'danger' : required === false ? 'warning' : 'gray',
      fontSize: '0.9em',
    }}
    {...props}
  >
    {children}
  </Box>
);
