import React from 'react';
import { Link } from 'rebass';

export const NavigationItem = ({ children, ...props }) => (
  <Link name="NavigationItem" variant="variants.nav" px={3} py={2} {...props}>
    {children}
  </Link>
);
