import React from 'react';
import { Box, Link } from 'rebass';

export const NavigationItem = ({ children, ...props }) => (
  <Box
    as="li"
    name="NavigationItem"
    px={0}
    sx={{
      display: 'block',
      listStyle: 'none',
    }}
  >
    <Link
      variant="variants.nav"
      py="2px"
      sx={{
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
      {...props}
    >
      {children}
    </Link>
  </Box>
);
