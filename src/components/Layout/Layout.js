import React from 'react';
import { Box } from 'rebass';

export const LAYOUT_SIDEBAR_WIDTH_PX = [0, 180, 260];

export const Layout = ({ children, ...props }) => (
  <Box
    name="Layout"
    sx={{
      display: 'grid',
      gridTemplateColumns: LAYOUT_SIDEBAR_WIDTH_PX.map((it) => `${it}px auto`),
      gridTemplateRows: 'auto',
      gridTemplateAreas: `"sidebar main"`,
      gridAutoColumns: 0,
      gridAutoRows: 0,
    }}
    {...props}
  >
    {children}
  </Box>
);
