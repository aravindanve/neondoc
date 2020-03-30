import React from 'react';
import { Box } from 'rebass';
import { withAlpha } from '../utils/color';

export const ErrorMessage = ({ message }) => (
  <Box
    sx={{
      bg: (t) => withAlpha(t.colors.danger, 0.2),
      color: 'danger',
    }}
  >
    {message}
  </Box>
);
