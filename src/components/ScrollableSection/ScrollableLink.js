import React, { useState, useEffect } from 'react';
import { useTargetsInViewport } from './ScrollableManager';

export const ScrollableSection = ({ hash, children }) => {
  const [active, setActive] = useState(false);
  const { targetIds } = useTargetsInViewport();

  useEffect(() => {
    if (targetIds.indexOf(hash) !== -1 && active !== true) {
      setActive(true);
    } else if (active !== false) {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIds, hash]);

  return <a href={`#${hash}`}>{children}</a>;
};
