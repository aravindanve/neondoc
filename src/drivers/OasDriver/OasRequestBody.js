import React, { useState } from 'react';
import { Box } from 'rebass';
import { Spacer } from '../../components/Spacer';
import { Markdown } from '../../components/Markdown';
import {
  SectionSimple,
  SectionSimpleHeader,
  SectionSimpleContent,
  SectionSimpleDescription,
} from '../../components/SectionSimple';
import { OasSchema } from './OasSchema';
import { OasMediaTypeSelect } from './OasMediaTypeSelect';

export const OasRequestBody = ({ requestBody }) => {
  const [selectedMediaType, setSelectedMediaType] = useState('application/json');

  const selectedMediaTypeObject = requestBody && requestBody.content && requestBody.content[selectedMediaType];

  return requestBody && requestBody.content ? (
    <>
      <SectionSimple>
        <SectionSimpleHeader>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'minmax(1fr, auto) minmax(min-content, 1fr)',
              gridTemplateRows: 'auto',
              gridTemplateAreas: `"title options"`,
              gridColumnGap: (t) => `${t.space[2]}px`,
              justifyItems: 'start', // hz axis
              alignItems: 'center', // vt axis
            }}
          >
            <Box sx={{ gridArea: 'title' }}>Request Body</Box>
            <Box
              sx={{
                gridArea: 'options',
                justifySelf: 'end',
              }}
            >
              <OasMediaTypeSelect
                defaultMediaType={selectedMediaType}
                onInput={(it) => setSelectedMediaType(it.target.value)}
                mediaTypes={requestBody.content ? Object.keys(requestBody.content) : []}
              />
            </Box>
          </Box>
        </SectionSimpleHeader>
        {requestBody.description && (
          <SectionSimpleDescription>
            <Markdown text={requestBody.description} />
          </SectionSimpleDescription>
        )}
        {selectedMediaTypeObject && selectedMediaTypeObject.schema ? (
          <SectionSimpleContent>
            <OasSchema schema={selectedMediaTypeObject.schema} nameOverride={'Type'} />
            {/* TODO: examples, see mediaTypeObject.examples or .example */}
            {/* {selectedMediaTypeObject.examples ? (
                selectedMediaTypeObject.examples.map((example, key) => <OasExample key={key} example={example} />)
              ) : selectedMediaTypeObject.example ? (
                <OasExample example={selectedMediaTypeObject.example} />
              ) : null} */}
            {/* TODO: support for multipart or url encodings, see mediaTypeObject.encoding */}
          </SectionSimpleContent>
        ) : (
          <Spacer multiplier={-1} />
        )}
      </SectionSimple>
      <Spacer />
    </>
  ) : null;
};
