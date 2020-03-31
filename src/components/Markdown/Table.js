import React from 'react';
import { Box } from 'rebass';
import { withAlpha } from '../../utils/color';
import { Spacer } from '../Spacer';

export const Table = ({ children, ...props }) => {
  return (
    <>
      <Box
        name="Table"
        my={3}
        sx={{
          '& > table': {
            borderCollapse: 'collapse',
            border: (t) => `${t.colors.lightgray} solid 1px !important`,
            'tr:nth-of-type(even)': {
              bg: (t) => withAlpha(t.colors.text, 0.1),
            },
            'th, td': {
              mx: 2,
              px: 3,
              py: 2,
              border: (t) => `${t.colors.lightgray} solid 1px !important`,
            },
          },
        }}
        {...props}
      >
        <table>{children}</table>
      </Box>
      <Spacer />
    </>
  );
};
