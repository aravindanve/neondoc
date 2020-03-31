import React, { useRef, useEffect } from 'react';
import { ScrollableManager } from './ScrollableManager';

export const ScrollableSection = ({ id, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    ScrollableManager.addSection({
      target: ref.current,
    });

    return () => {
      ScrollableManager.removeSection(id);
    };
  }, [id]);

  return (
    <span id={id} ref={ref}>
      {children}
    </span>
  );
};
