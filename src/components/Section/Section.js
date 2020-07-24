import React from 'react';
import { Box } from 'rebass';

export const Section = ({ children, inner = false, ...props }) => (
  <Box name="Section" my={5}>
    <Box my={-3} {...props}>
      {/* my -3 & py 3 is for hash link clearance */}
      <Box py={3}>{children}</Box>
    </Box>
  </Box>
);
