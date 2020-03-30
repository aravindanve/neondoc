import React from 'react';
import { Text } from 'rebass';
import { Markdown, CodeInline } from '../../components/Markdown';
import { entries, fullName } from '../../utils/openapi';
import { Schema, SchemaName, SchemaType, SchemaDescription } from '../../components/Schema';
import { SchemaChildren } from '../../components/Schema/SchemaChildren';
import { withAlpha } from '../../utils/color';
import { OasSchema } from './OasSchema';

export const OasSchemaRoot = ({ schema, required }) =>
  schema && schema.type === 'objecta' ? (
    <>
      {/* {schema.description && ( */}
      {true && <Text>This is some text</Text>}
      {schema.properties &&
        entries(schema.properties).map(([propertyName, propertySchema], key) => (
          <OasSchema
            schema={propertySchema}
            required={schema.required ? schema.required.indexOf(propertyName) !== -1 : false}
            name={propertyName}
            // baseName={fullName(name, baseName, baseIsArray)}
            baseIsArray={false}
          />
        ))}
    </>
  ) : (
    <OasSchema schema={schema} required={required} />
  );
