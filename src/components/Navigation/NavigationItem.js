import React, { forwardRef } from 'react';
import { Link } from 'rebass';
import { withAlpha } from '../../utils/color';

export const NavigationItem = forwardRef(({ children, active, ...props }, ref) => (
  <Link
    ref={ref}
    name="NavigationItem"
    variant="variants.nav"
    px={3}
    py={2}
    sx={{
      bg: active ? (t) => withAlpha(t.colors.text, 0.4) : 'muted',
      color: active ? 'text' : 'gray',
      transition: 'none',
      ':visited': {
        color: active ? 'text' : 'gray',
        transition: 'none',
      },
    }}
    {...props}
  >
    {children}
  </Link>
));
