import React from 'react';
import { Box } from 'rebass';

export const SectionSimple = ({ children, ...props }) => (
  <Box name="SectionSimple" {...props}>
    {children}
  </Box>
);
