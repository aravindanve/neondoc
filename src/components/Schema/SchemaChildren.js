import React from 'react';
import { Box } from 'rebass';

export const SchemaChildren = ({ children, title = '', collapsable = false, ...props }) => (
  <Box
    name="SchemaChildren"
    my={3}
    sx={{
      color: 'gray',
      borderRadius: 'rounder',
      border: (t) => `${t.colors.lightgray} solid 1px`,
    }}
    {...props}
  >
    {title && (
      <Box
        px={2}
        py={1}
        sx={{
          fontSize: 1,
          color: 'gray',
          borderBottom: (t) => `${t.colors.lightgray} solid 1px`,
        }}
      >
        {title}
      </Box>
    )}
    {/* TODO: add collapse functionality */}
    <Box
      name="FIXME"
      px={3}
      sx={{
        '& > *:last-of-type': {
          borderBottom: 'none',
        },
      }}
    >
      {children}
    </Box>
  </Box>
);
