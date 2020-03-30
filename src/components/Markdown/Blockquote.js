import React from 'react';
import { Box } from 'rebass';
import { withAlpha } from '../../utils/color';

export const Blockquote = ({ children, ...props }) => (
  <Box
    name="Blockquote"
    p={3}
    sx={{
      borderLeft: (t) => `${t.colors.primary} solid 5px`,
      bg: (t) => withAlpha(t.colors.primary, 0.15),
      '& > p': {
        my: '0px',
      },
    }}
    {...props}
  >
    {children}
  </Box>
);
