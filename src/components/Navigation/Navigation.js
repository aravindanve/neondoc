import React from 'react';
import { Box } from 'rebass';

export const Navigation = ({ children, ...props }) => (
  <Box
    name="Navigation"
    sx={{
      borderRadius: 'default',
      overflow: 'hidden',
    }}
    {...props}
  >
    {children}
  </Box>
);
