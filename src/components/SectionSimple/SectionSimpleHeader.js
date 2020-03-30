import React from 'react';
import { Box, Heading } from 'rebass';

export const SectionSimpleHeader = ({ children, ...props }) => (
  <Box
    name="SectionSimpleHeader"
    py={2}
    sx={{
      variant: 'variants.rule',
      color: 'text',
    }}
    {...props}
  >
    <Heading variant="section">{children}</Heading>
  </Box>
);
