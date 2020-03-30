import React from 'react';
import { Box, Heading } from 'rebass';

export const SectionHeader = ({ children, ...props }) => (
  <Box
    name="SectionHeader"
    px={3}
    py={2}
    sx={{
      bg: 'lightgray',
    }}
    {...props}
  >
    <Heading variant="heading">{children}</Heading>
  </Box>
);
