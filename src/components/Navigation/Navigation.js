import React from 'react';
import { Box } from 'rebass';
import { useTargetsInViewport } from '../ScrollableSection';

export const Navigation = ({ children, ...props }) => {
  const { targetIds } = useTargetsInViewport();
  console.log('useTargetsInViewport', targetIds);
  return (
    <Box
      name="Navigation"
      sx={{
        borderRadius: 'default',
        overflow: 'hidden',
        '& > *:last-of-type': {
          borderBottom: 'none',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
