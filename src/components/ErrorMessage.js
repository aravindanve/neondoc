import React from 'react';
import { Box } from 'rebass';
import { withAlpha } from '../utils/color';

export const ErrorMessage = ({ message, ...props }) => (
  <Box
    p={3}
    sx={{
      bg: (t) => withAlpha(t.colors.danger, 0.2),
      color: 'danger',
    }}
    {...props}
  >
    {message}
  </Box>
);
