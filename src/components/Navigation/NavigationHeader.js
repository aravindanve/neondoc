import React from 'react';
import { Box, Link } from 'rebass';

export const NavigationHeader = ({ children, ...props }) => (
  <Box
    as="li"
    name="NavigationHeader"
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
        color: 'text',
        fontWeight: 'bold',
        ':visited': {
          color: 'text',
        },
      }}
      {...props}
    >
      {children}
    </Link>
  </Box>
);
