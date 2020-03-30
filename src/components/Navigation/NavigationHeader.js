import React from 'react';
import { Box } from 'rebass';

export const NavigationHeader = ({ children, ...props }) => (
  <Box
    name="NavigationHeader"
    px={3}
    py={2}
    sx={{
      bg: 'lightgray',
      color: 'gray',
    }}
    {...props}
  >
    {children}
  </Box>
);
