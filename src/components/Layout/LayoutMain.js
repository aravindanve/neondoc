import React from 'react';
import { Box } from 'rebass';

export const LayoutMain = ({ children, ...props }) => (
  <Box
    name="LayoutMain"
    p={3}
    sx={{
      gridArea: 'main',
    }}
    {...props}
  >
    {children}
  </Box>
);
