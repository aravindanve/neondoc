import React from 'react';
import { Spacer } from '../../components/Spacer';
import { Markdown } from '../../components/Markdown';
import { parametersForLocation } from '../../utils/openapi';
import { Section, SectionContent } from '../../components/Section';
import { OasRequestBody } from './OasRequestBody';
import { OasParamaters } from './OasParameters';
import { OasResponses } from './OasResponses';
import { useOperationId } from './useOperationId';
import { OasOperationHeader } from './OasOperationHeader';

export const OasSectionInner = ({ operation }) => {
  const { operationId } = useOperationId(operation);

  return (
    <>
      <Section id={operationId}>
        <OasOperationHeader title={operation.summary} verb={operation._method} path={operation._path} />
        <Spacer />
        <SectionContent>
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
        </SectionContent>
      </Section>
      <Spacer />
    </>
  );
};
