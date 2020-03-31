import React from 'react';
import { Box } from 'rebass';
import { LAYOUT_SIDEBAR_WIDTH_PX } from './Layout';

export const LayoutSidebar = ({ children, ...props }) => (
  <Box
    name="LayoutSidebar"
    p={3}
    sx={{
      gridArea: 'sidebar',
      position: 'fixed',
      maxHeight: '100vh',
      width: LAYOUT_SIDEBAR_WIDTH_PX.map((it) => `${it}px`),
      overflowY: 'scroll',
    }}
    {...props}
  >
    {children}
  </Box>
);
