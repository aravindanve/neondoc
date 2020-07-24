import React from 'react';
import { Box } from 'rebass';

export const Navigation = ({ children, ...props }) => (
  <Box
    as="ul"
    name="Navigation"
    px={0}
    sx={{
      display: 'block',
      listStyle: 'none',
    }}
    {...props}
  >
    {children}
  </Box>
);
