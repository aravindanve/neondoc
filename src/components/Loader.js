import React from 'react';
import { Box } from 'rebass';

export const Loader = ({ minWidth = 16, maxWidth = 80, height = 6 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: `${maxWidth}px`,
          height: `${height}px`,
          position: 'relative',
          '& > span': {
            backgroundColor: 'primary',
            borderRadius: `${height}px`,
            display: 'block',
            height: `${height}px`,
            width: `${minWidth}px`,
            bottom: '0',
            position: 'absolute',
            transform: `translateX(${maxWidth - minWidth}px)`,
            animation: `worm 2.5s ease both infinite`,

            '@keyframes worm': {
              '0%': {
                width: `${minWidth}px`,
                transform: 'translateX(0px)',
              },
              '20%': {
                width: '100%',
                transform: 'translateX(0px)',
              },
              '50%': {
                width: `${minWidth}px`,
                transform: `translateX(${maxWidth - minWidth}px)`,
              },
              '80%': {
                width: '100%',
                transform: 'translateX(0px)',
              },
              '100%': {
                width: `${minWidth}px`,
                transform: 'translateX(0px)',
              },
            },
          },
        }}
      >
        <span />
      </Box>
    </Box>
  );
};
