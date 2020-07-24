import React, { useState } from 'react';
import { Box } from 'rebass';

export const SchemaChildren = ({ children, title = '', collapsable = false, ...props }) => {
  const [collapsed, setCollapsed] = useState(collapsable);

  return (
    <Box
      name="SchemaChildren"
      mt={3}
      mb={2}
      sx={{
        width: collapsed ? 'min-content' : 'initial',
        color: 'gray',
        borderRadius: collapsed ? '16px' : '16px',
        border: (t) => `${t.colors.lightgray} solid 1px`,
      }}
      {...props}
    >
      {(title || collapsable) && (
        <Box
          px={3}
          py={2}
          onClick={() => collapsable && setCollapsed(!collapsed)}
          sx={{
            userSelect: 'none',
            whiteSpace: 'nowrap',
            fontSize: 1,
            color: 'gray',
            borderBottom: (t) => (collapsed ? 'none' : `${t.colors.lightgray} solid 1px`),
            ...(collapsable && {
              cursor: 'pointer',
              ':hover': {
                color: 'text',
                transition: 'color 0.5s ease',
              },
            }),
          }}
        >
          {!collapsable ? '' : collapsed ? 'Show ' : 'Hide '}
          {title}
        </Box>
      )}
      {/* TODO: add collapse functionality */}
      <Box
        display={collapsed ? 'none' : 'block'}
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
};
