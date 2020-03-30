import React from 'react';
import { Box } from 'rebass';

export const Section = ({ children, inner = false, ...props }) => (
  <Box
    name="Section"
    mx={inner ? [-3, -2] : [-3, 0]}
    sx={{
      borderRadius: inner ? [0, 'rounder'] : [0, 'default'],
      overflow: 'hidden',
    }}
    {...props}
  >
    {children}
  </Box>
);
