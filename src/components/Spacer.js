import React from 'react';
import { Box } from 'rebass';

export const Spacer = ({ multiplier = 1, ...props }) => (
  <Box
    name="Spacer"
    sx={{
      mb: (t) => t.space[3] * multiplier,
    }}
    {...props}
  />
);
