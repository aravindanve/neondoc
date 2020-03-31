import React from 'react';
import { Text } from 'rebass';
import { SchemaName, SchemaType } from '../../components/Schema';
import { withAlpha } from '../../utils/color';

export const OasSchemaNameAndType = ({
  type,
  required,
  name = '',
  nameOverride = '',
  baseName = '',
  baseIsArray = false,
}) => (
  <>
    {nameOverride ? (
      <SchemaName>
        <Text as="span" sx={{ color: (t) => withAlpha(t.colors.text, 0.3) }}>
          {nameOverride}
        </Text>
      </SchemaName>
    ) : baseName ? (
      <SchemaName>
        {baseName && baseIsArray ? (
          <>
            <Text
              as="span"
              sx={{
                fontSize: '0.9em',
                color: (t) => withAlpha(t.colors.text, 0.3),
              }}
            >
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
    {type && (
      <SchemaType required={required}>
        {required === true ? 'required ' : required === false ? 'optional ' : ''}
        {type}
      </SchemaType>
    )}
  </>
);
