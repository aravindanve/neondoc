import React from 'react';
import { Markdown, CodeInline } from '../../components/Markdown';
import { entries, fullName } from '../../utils/openapi';
import { Schema, SchemaDescription } from '../../components/Schema';
import { SchemaChildren } from '../../components/Schema/SchemaChildren';
import { OasSchemaNameAndType } from './OasSchemaNameAndType';

export const OasSchema = ({
  schema,
  required,
  name = '',
  nameOverride = '',
  baseName = '',
  baseIsArray = false,
  collapseAfterLevels = 1,
}) =>
  schema ? (
    ['null', 'boolean', 'number', 'integer', 'string', 'array', 'object'].indexOf(schema.type) !== -1 ? (
      <Schema>
        <OasSchemaNameAndType
          type={schema.type}
          required={required}
          name={name}
          nameOverride={nameOverride}
          baseName={baseName}
          baseIsArray={baseIsArray}
        />
        {schema.description && (
          <SchemaDescription>
            <Markdown text={schema.description} />
          </SchemaDescription>
        )}
        {schema.properties && (
          <SchemaChildren title={'Object Properties'} collapsable={collapseAfterLevels <= 0}>
            {entries(schema.properties).map(([propertyName, propertySchema], key) => (
              <OasSchema
                key={key}
                schema={propertySchema}
                required={schema.required ? schema.required.indexOf(propertyName) !== -1 : false}
                name={propertyName}
                baseName={fullName(name, baseName, baseIsArray)}
                baseIsArray={false}
                collapseAfterLevels={collapseAfterLevels - 1}
              />
            ))}
          </SchemaChildren>
        )}
        {schema.items && (
          <SchemaChildren title={'Array Item'} collapsable={false}>
            <OasSchema
              schema={schema.items}
              required={undefined} // FIXME
              name={'i'} // FIXME
              baseName={fullName(name, baseName, baseIsArray) || ' '} // HACK: for `[]` at the start
              baseIsArray={true}
              collapseAfterLevels={collapseAfterLevels - 1}
            />
          </SchemaChildren>
        )}
        {schema.enum && (
          <SchemaChildren title={'Possible enum values'} collapsable={false}>
            {schema.enum.map((value) => (
              <Schema key={value}>
                <CodeInline value={value} />
              </Schema>
            ))}
          </SchemaChildren>
        )}
      </Schema>
    ) : schema.allOf ? (
      'allOf'
    ) : schema.oneOf ? (
      'OneOf'
    ) : schema.not ? (
      'Not'
    ) : schema.anyOf ? (
      'AnyOf'
    ) : (
      <Schema>
        <OasSchemaNameAndType
          type={'any'}
          required={required}
          name={name}
          nameOverride={nameOverride}
          baseName={baseName}
          baseIsArray={baseIsArray}
        />
        {schema.description && (
          <SchemaDescription>
            <Markdown text={schema.description} />
          </SchemaDescription>
        )}
      </Schema>
    )
  ) : null;
