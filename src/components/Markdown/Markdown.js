import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from 'rebass';
import { CodeBlock } from './CodeBlock';
import { Blockquote } from './Blockquote';
import { CodeInline } from './CodeInline';
import { Table } from './Table';

export const Markdown = ({ text, ...props }) => (
  <Box
    name="Markdown"
    sx={{
      a: {
        variant: 'variants.link',
      },
      p: {
        variant: 'variants.paragraph',
      },
      hr: {
        variant: 'variants.rule',
      },
      // markdown introduces margin-top because of <p>
      '& > *:first-of-type': {
        mt: 0,
      },
      // markdown introduces margin-bottom because of <p>
      '& > *:last-of-type': {
        mb: 0,
      },
    }}
    {...props}
  >
    <ReactMarkdown
      source={text}
      renderers={{
        code: CodeBlock,
        inlineCode: CodeInline,
        blockquote: Blockquote,
        table: Table,
      }}
    />
  </Box>
);
