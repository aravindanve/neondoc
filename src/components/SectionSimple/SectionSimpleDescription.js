import React from 'react';
import { Box } from 'rebass';

export const SectionSimpleDescription = ({ children, ...props }) => (
  <Box name="SectionSimpleDescription" py={2} {...props}>
    {children}
  </Box>
);
