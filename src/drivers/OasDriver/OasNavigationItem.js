import React, { useRef, useEffect } from 'react';
import { Text } from 'rebass';
import { NavigationItem } from '../../components/Navigation';
import { summaryForOperation } from '../../utils/openapi';
import { MethodIcon } from '../../components/MethodIcon';
import { useOperationId } from './useOperationId';
import { useTargetsInViewport } from '../../components/ScrollableSection';
import { debounce } from '../../utils/events';

const debouncedScrollIntoView = debounce((node) =>
  node.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  }),
);

export const OasNavigationItem = ({ operation }) => {
  const ref = useRef();
  const { targetIds } = useTargetsInViewport();
  const { operationId } = useOperationId(operation);
  const active = targetIds[0] === operationId;

  useEffect(() => {
    if (active) {
      ref.current && debouncedScrollIntoView(ref.current);
    }
  }, [active]);

  return (
    <NavigationItem ref={ref} active={active} href={`#${operationId}`}>
      <MethodIcon method={operation._method}></MethodIcon>
      <Text as="span">{summaryForOperation(operation)}</Text>
    </NavigationItem>
  );
};
