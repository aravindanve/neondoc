import React from 'react';
import { ScrollableSection } from '../../components/ScrollableSection';
import { Spacer } from '../../components/Spacer';
import { Markdown } from '../../components/Markdown';
import { parametersForLocation } from '../../utils/openapi';
import { SectionColor, SectionColorContent } from '../../components/SectionColor';
import { OasRequestBody } from './OasRequestBody';
import { OasParamaters } from './OasParameters';
import { OasResponses } from './OasResponses';
import { useOperationId } from './useOperationId';

export const OasSectionInner = ({ operation }) => {
  const { operationId } = useOperationId(operation);

  return (
    <ScrollableSection id={operationId}>
      <SectionColor inner={true} title={operation.summary} verb={operation._method} path={operation._path}>
        <SectionColorContent>
          {/* sub-section: description */}
          {operation.description && (
            <>
              <Markdown text={operation.description} />
              <Spacer />
            </>
          )}
          {/* TODO: auth schemes section, see operation.security */}
          {/* TODO: external docs section, see operation.externalDocs */}
          {/* sub-section: parameters */}
          {operation.parameters &&
            [
              ['path', 'Path Parameters'],
              ['header', 'Headers'],
              ['cookie', 'Cookies'],
              ['query', 'Query Parameters'],
            ]
              .map(([location, title]) => [parametersForLocation(location, operation.parameters), title])
              .filter(([parameters]) => parameters.length)
              .map(([parameters, title], key) => <OasParamaters key={key} title={title} parameters={parameters} />)}
          {/* sub-section: request body */}
          {operation.requestBody && <OasRequestBody requestBody={operation.requestBody} />}
          {/* sub-section: response */}
          {operation.responses && <OasResponses responses={operation.responses} />}
          <Spacer multiplier={-1} />
        </SectionColorContent>
      </SectionColor>
      <Spacer />
    </ScrollableSection>
  );
};
