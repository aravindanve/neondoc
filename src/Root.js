import React from 'react';
import { Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';
import { OasDriver } from './drivers/OasDriver/OasDriver';

import spec from './sample';

console.log('OAS >>', spec); // FIXME

export const Root = ({ ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    <Box variant="styles.root">
      <OasDriver spec={spec}></OasDriver>
    </Box>
  </ThemeProvider>
);
