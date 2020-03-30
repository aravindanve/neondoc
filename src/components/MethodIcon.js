import React from 'react';
import { Box } from 'rebass';
import { camelcased } from '../utils/string';

export const MethodIcon = ({ method, ...props }) => (
  <Box
    name="MethodIcon"
    p={1}
    mr={1}
    ml={-1}
    sx={{
      color: camelcased('http', method) || 'gray',
      display: 'inline',
      fontSize: 3,
    }}
    {...props}
  >
    &bull;
    {/* {method.substring(0, 3).toUpperCase()} */}
  </Box>
);
