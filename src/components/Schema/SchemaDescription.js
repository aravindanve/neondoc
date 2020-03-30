import React from 'react';
import { Box } from 'rebass';

export const SchemaDescription = ({ children, ...props }) => (
  <Box
    name="SchemaDescription"
    mt={1}
    sx={{
      color: 'gray',
    }}
    {...props}
  >
    {children}
  </Box>
);
