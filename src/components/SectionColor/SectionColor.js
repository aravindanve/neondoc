import React from 'react';
import { Box, Text } from 'rebass';
import { withAlpha } from '../../utils/color';
import { camelcased } from '../../utils/string';

export const SectionColor = ({ title = '', verb = '', path = '', inner = false, children, ...props }) => {
  const color = (t) => t.colors[camelcased('http', verb)] || t.colors.gray;
  return (
    <Box
      name="SectionColor"
      mx={inner ? [-3, -2] : [-3, 0]}
      sx={{
        border: (t) => `${color(t)} solid 1px`,
        borderRadius: inner ? [0, 'rounder'] : [0, 'default'],
        overflow: 'hidden',
      }}
      {...props}
    >
      <Box
        name="SectionColorHeader"
        p={2}
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
          bg: color,
          color: 'text',
        }}
      >
        {title && (
          <Text
            name="SectionColorTitle"
            variant="section"
            mt={-1}
            mb={inner ? 2 : 3}
            sx={{
              gridArea: 'title',
              color: (t) => withAlpha(t.colors.background, 0.7),
            }}
          >
            {title}
          </Text>
        )}
        <Box
          name="SectionColorVerb"
          px={2}
          py={1}
          sx={{
            gridArea: 'verb',
            bg: (t) => withAlpha(t.colors.background, 0.4),
            borderRadius: 'default',
          }}
        >
          {verb.toUpperCase()}
        </Box>
        <Box
          as="code"
          name="SectionColorPath"
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
          {path}
        </Box>
      </Box>
      {children}
    </Box>
  );
};
