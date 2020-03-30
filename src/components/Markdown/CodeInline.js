import React from 'react';
import { Box } from 'rebass';
import { withAlpha } from '../../utils/color';

export const CodeInline = ({ language, value, ...props }) => {
  return (
    <Box
      as="span"
      name="CodeInline"
      sx={{
        '& > code': {
          mx: '2px',
          px: '4px',
          py: '1px',
          bg: (t) => withAlpha(t.colors.text, 0.1),
          border: (t) => `${withAlpha(t.colors.text, 0.15)} solid 1px`,
          fontFamily: 'monospace',
          fontSize: '0.9em',
          borderRadius: '4px',
          color: 'info',
        },
      }}
      {...props}
    >
      <code>{value}</code>
    </Box>
  );
};
