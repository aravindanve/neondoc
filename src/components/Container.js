import React from 'react';
import { Box } from 'rebass';

export const CONTAINER_MAX_WIDTH_PX = 990;

export const Container = ({ children, ...props }) => (
  <Box name="Container" mx="auto" my={0} maxWidth={CONTAINER_MAX_WIDTH_PX} {...props}>
    {children}
  </Box>
);
