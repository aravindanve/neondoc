import React from 'react';
import { Box } from 'rebass';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spacer } from '../Spacer';

export const CodeBlock = ({ language, value, ...props }) => {
  return (
    <>
      <Box
        name="CodeBlock"
        sx={{
          '& > pre': {
            fontSize: (t) => `0.9em !important`,
            padding: (t) => `${t.space[3]}px !important`,
            borderRadius: (t) => `${t.radii.rounder}px !important`,
            border: (t) => `${t.colors.lightgray} solid 1px !important`,
          },
        }}
        {...props}
      >
        <SyntaxHighlighter language={language} style={atomDark}>
          {value}
        </SyntaxHighlighter>
      </Box>
      <Spacer />
    </>
  );
};
