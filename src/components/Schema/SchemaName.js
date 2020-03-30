import React from 'react';
import { Text } from 'rebass';

export const SchemaName = ({ children, ...props }) => (
  <Text
    as="code"
    name="SchemaName"
    sx={{
      color: 'text',
      fontSize: '0.9em',
      fontWeight: 'bold',
      fontFamily: 'monospace',
    }}
    {...props}
  >
    {children}{' '}
  </Text>
);
