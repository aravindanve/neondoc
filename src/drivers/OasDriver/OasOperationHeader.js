import React, { Fragment } from 'react';
import { Box, Text } from 'rebass';
import { withAlpha } from '../../utils/color';
import { camelcased } from '../../utils/string';

export const OasOperationHeader = ({ title, verb, path, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content auto',
      gridTemplateRows: 'auto',
      gridTemplateAreas: `
            "title title"
            "verb path"`,
      gridColumnGap: (t) => `${t.space[2]}px`,
      justifyItems: 'start', // hz axis
      alignItems: 'start', // vt axis
      color: 'text',
    }}
  >
    {title && (
      <Text
        variant="heading"
        mt={-1}
        mb={3}
        sx={{
          gridArea: 'title',
          fontWeight: 'body',
        }}
      >
        {title}
      </Text>
    )}
    <Box
      px={2}
      py={1}
      sx={{
        gridArea: 'verb',
        bg: (t) => t.colors[camelcased('http', verb)] || t.colors.gray,
        borderRadius: 'default',
      }}
    >
      {verb.toUpperCase()}
    </Box>
    <Box
      as="code"
      px={2}
      py={1}
      sx={{
        gridArea: 'path',
        bg: (t) => withAlpha(t.colors.lightgray, 0.8),
        borderRadius: 'default',
        wordWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      {path
        .split('/')
        .filter((it) => it.trim())
        .map((segment, key) =>
          /^{.*}$/.test(segment) ? (
            <Fragment key={key}>
              <Box as="span">/</Box>
              <Box as="span" sx={{ color: 'danger' }}>
                {segment}
              </Box>
            </Fragment>
          ) : (
            <Fragment key={key}>
              <Box as="span">/{segment}</Box>
            </Fragment>
          ),
        )}
    </Box>
  </Box>
);
