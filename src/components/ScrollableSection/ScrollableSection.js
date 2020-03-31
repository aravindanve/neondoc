import React, { useRef, useEffect } from 'react';
import { ScrollableManager } from './ScrollableManager';

export const ScrollableSection = ({ id, children, offsetTop = '16px' }) => {
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
    <div
      id={id}
      ref={ref}
      style={{
        marginTop: `-${offsetTop}`,
        paddingTop: offsetTop,
      }}
    >
      {children}
    </div>
  );
};
