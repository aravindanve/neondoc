import React from 'react';
import { Text } from 'rebass';
import { Markdown, CodeInline } from '../../components/Markdown';
import { entries, fullName } from '../../utils/openapi';
import { Schema, SchemaName, SchemaType, SchemaDescription } from '../../components/Schema';
import { SchemaChildren } from '../../components/Schema/SchemaChildren';
import { withAlpha } from '../../utils/color';

// TODO: improve schema support
export const OasSchema = ({ schema, required, name = '', baseName = '', baseIsArray = false }) =>
  schema &&
  (['null', 'boolean', 'number', 'integer', 'string', 'array', 'object'].indexOf(schema.type) !== -1 ? (
    <Schema>
      {baseName ? (
        <SchemaName>
          {baseName && baseIsArray ? (
            <>
              <Text as="span" sx={{ color: (t) => withAlpha(t.colors.text, 0.3) }}>
                {baseName}[
              </Text>
              <Text as="span">{name}</Text>
              <Text as="span" sx={{ color: (t) => withAlpha(t.colors.text, 0.3) }}>
                ]
              </Text>
            </>
          ) : baseName ? (
            <>
              <Text as="span" sx={{ color: (t) => withAlpha(t.colors.text, 0.3) }}>
                {baseName}.
              </Text>
              <Text as="span">{name}</Text>
            </>
          ) : (
            name
          )}
        </SchemaName>
      ) : name ? (
        <SchemaName>{name}</SchemaName>
      ) : null}
      {schema.type && (
        <SchemaType required={required}>
          {required === true ? 'required ' : required === false ? 'optional ' : ''}
          {schema.type}
        </SchemaType>
      )}
      {schema.description && (
        <SchemaDescription>
          <Markdown text={schema.description} />
        </SchemaDescription>
      )}
      {schema.properties && (
        <SchemaChildren title={'Object Properties'} collapsable={true}>
          {entries(schema.properties).map(([propertyName, propertySchema], key) => (
            <OasSchema
              schema={propertySchema}
              required={schema.required ? schema.required.indexOf(propertyName) !== -1 : false}
              name={propertyName}
              baseName={fullName(name, baseName, baseIsArray)}
              baseIsArray={false}
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
          />
        </SchemaChildren>
      )}
      {schema.enum && (
        <SchemaChildren title={'Possible enum values'} collapsable={false}>
          {schema.enum.map((value) => (
            <Schema>
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
    'Any' + JSON.stringify(schema) // FIXME
  ));
