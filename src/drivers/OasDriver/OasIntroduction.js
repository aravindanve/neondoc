import React from 'react';
import { Heading } from 'rebass';
import { Spacer } from '../../components/Spacer';
import { Markdown } from '../../components/Markdown';
import { OasContext } from './OasContext';

export const OasIntroduction = () => (
  <OasContext.Consumer>
    {({ info }) =>
      info && (
        <>
          {/* document title */}
          {info.title && (
            <>
              <Heading variant="display">{info.title}</Heading>
              <Spacer />
            </>
          )}
          {/* document description */}
          {info.description && (
            <>
              <Markdown text={info.description} />
              <Spacer />
            </>
          )}
        </>
      )
    }
  </OasContext.Consumer>
);
