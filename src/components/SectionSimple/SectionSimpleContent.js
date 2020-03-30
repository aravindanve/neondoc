import React from 'react';
import { Box } from 'rebass';

export const SectionSimpleContent = ({ children, ...props }) => (
  <Box
    name="SectionSimpleContent"
    sx={{
      bg: 'muted',
      color: 'gray',
    }}
    {...props}
  >
    {children}
  </Box>
);
