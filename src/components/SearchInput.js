import React from 'react';
import { Input } from '@rebass/forms';

export const SearchInput = ({ ...props }) => (
  <Input
    placeholder="Type to Search"
    sx={{
      bg: 'transparent',
    }}
    {...props}
  />
);
