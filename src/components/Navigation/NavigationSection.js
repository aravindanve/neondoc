import React from 'react';
import { Box } from 'rebass';
import { Navigation } from './Navigation';

export const NavigationSection = ({ children, ...props }) => (
  <Box
    as="li"
    name="NavigationSection"
    sx={{
      display: 'block',
      listStyle: 'none',
    }}
    {...props}
  >
    <Navigation as="ul">{children}</Navigation>
  </Box>
);
