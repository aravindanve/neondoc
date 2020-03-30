import React from 'react';
import { Box } from 'rebass';

export const Layout = ({ children, ...props }) => (
  <Box
    name="Layout"
    sx={{
      display: 'grid',
      gridTemplateColumns: ['0 auto', '180px auto', '260px auto'],
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
