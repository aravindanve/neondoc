import React from 'react';
import { Text } from 'rebass';
import { NavigationItem } from '../../components/Navigation';
import { summaryForOperation } from '../../utils/openapi';
import { useOperationId } from './useOperationId';

export const OasNavigationItem = ({ operation }) => {
  const { operationId } = useOperationId(operation);
  return (
    <NavigationItem href={`#${operationId}`} iconStyle={operation._method}>
      <Text as="span">{summaryForOperation(operation)}</Text>
    </NavigationItem>
  );
};
