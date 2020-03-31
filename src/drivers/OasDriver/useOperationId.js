import { useMemo } from 'react';

export const useOperationId = (operation) => {
  const computedId = useMemo(() => operation.operationId || `${operation._method}::${operation._path}`, [
    operation.operationId,
    operation._method,
    operation._path,
  ]);

  return { operationId: computedId };
};
