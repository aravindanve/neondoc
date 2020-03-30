import React from 'react';
import { Box } from 'rebass';
import { withAlpha } from '../../utils/color';

export const SectionContent = ({ children, inner = false, ...props }) => (
  <Box
    name="SectionContent"
    p={inner ? 2 : 3}
    sx={{
      bg: 'muted',
      color: 'gray',
      border: (t) => `${withAlpha(t.colors.text, 0.1)} solid 1px`,
    }}
    {...props}
  >
    {children}
  </Box>
);
