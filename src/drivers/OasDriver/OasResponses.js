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
import { OasResponseCodeSelect } from './OasResponseCodeSelect';

export const OasResponses = ({ responses }) => {
  const initialCode = responses && Object.keys(responses).sort().shift();
  const [selectedCode, setSelectedCode] = useState(initialCode);
  const [selectedMediaType, setSelectedMediaType] = useState('application/json');

  const selectedResponse = responses && responses[selectedCode];
  const selectedMediaTypeObject =
    selectedResponse && selectedResponse.content && selectedResponse.content[selectedMediaType];

  return responses ? (
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
            <Box sx={{ gridArea: 'title' }}>Response</Box>
            <Box
              sx={{
                gridArea: 'options',
                justifySelf: 'end',
              }}
            >
              <OasMediaTypeSelect
                defaultMediaType={selectedMediaType}
                onInput={(it) => setSelectedMediaType(it.target.value)}
                mediaTypes={selectedResponse && selectedResponse.content ? Object.keys(selectedResponse.content) : []}
              />
            </Box>
          </Box>
        </SectionSimpleHeader>
        <SectionSimpleDescription>
          <OasResponseCodeSelect
            defaultResponseCode={selectedCode}
            onInput={(it) => setSelectedCode(it.target.value)}
            responseCodes={Object.keys(responses)}
          />
          {selectedResponse && selectedResponse.description && (
            <>
              <Spacer />
              <Markdown text={selectedResponse.description} />
            </>
          )}
        </SectionSimpleDescription>
        {/* TODO: add support for response headers, see response.headers */}
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
