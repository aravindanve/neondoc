import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { Box } from 'rebass';
import { useTheme } from 'emotion-theming';

export const Loader = ({ spec }) => {
  const theme = useTheme();
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
      <BarLoader color={theme.colors.primary} loading={true} />
    </Box>
  );
};
