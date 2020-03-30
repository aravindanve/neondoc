import React from 'react';
import { Box } from 'rebass';

export const Schema = ({ children, ...props }) => (
  <Box
    name="Schema"
    py={2}
    sx={{
      variant: 'variants.rule',
    }}
    {...props}
  >
    {children}
  </Box>
);
