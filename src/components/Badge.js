import React from 'react';
import { Box } from 'rebass';

export const Badge = ({ children, ...props }) => (
  <Box
    sx={{
      display: 'inline-block',
      color: 'white',
      bg: 'primary',
      px: 2,
      py: 1,
      borderRadius: 9999,
    }}
  >
    {children}
  </Box>
);
