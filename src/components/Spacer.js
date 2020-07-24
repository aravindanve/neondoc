import React from 'react';
import { Box } from 'rebass';

export const Spacer = ({ multiplier = 1, rule = false, ...props }) => (
  <Box
    name="Spacer"
    sx={{
      mb: (t) => t.space[3] * multiplier,
      ...(rule && {
        pt: (t) => t.space[3] * multiplier,
        borderBottom: (t) => `${t.colors.muted} solid 1px`,
      }),
    }}
    {...props}
  />
);
