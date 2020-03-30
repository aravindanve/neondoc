import React from 'react';
import { Spacer } from '../../components/Spacer';
import { Markdown } from '../../components/Markdown';
import { summaryForSchema } from '../../utils/openapi';
import { SectionSimple, SectionSimpleHeader, SectionSimpleContent } from '../../components/SectionSimple';
import { Schema, SchemaName, SchemaType, SchemaDescription } from '../../components/Schema';

export const OasParamaters = ({ title, parameters }) => (
  <>
    <SectionSimple>
      <>
        {title && <SectionSimpleHeader>{title}</SectionSimpleHeader>}
        <SectionSimpleContent>
          {parameters &&
            parameters.map((parameter, key) => (
              <Schema key={key}>
                {/* parameter name */}
                <SchemaName>{parameter.name}</SchemaName>
                {/* parameter type */}
                <SchemaType required={parameter.required}>
                  {parameter.required ? 'required ' : 'optional '}
                  {summaryForSchema(parameter.schema)}
                  {/* TODO: indicate deprecated parameters, see parameter.deprecated */}
                </SchemaType>
                {/* parameter description */}
                {parameter.description && (
                  <SchemaDescription>
                    <Markdown text={parameter.description} />
                  </SchemaDescription>
                )}
              </Schema>
            ))}
        </SectionSimpleContent>
      </>
    </SectionSimple>
    <Spacer />
  </>
);
