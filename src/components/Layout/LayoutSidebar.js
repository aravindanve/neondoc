import React from 'react';
import { Box } from 'rebass';

export const LayoutSidebar = ({ children, ...props }) => (
  <Box
    name="LayoutSidebar"
    p={3}
    sx={{
      gridArea: 'sidebar',
    }}
    {...props}
  >
    {children}
  </Box>
);
