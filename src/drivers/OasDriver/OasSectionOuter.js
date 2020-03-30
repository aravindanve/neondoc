import React, { Fragment } from 'react';
import { Spacer } from '../../components/Spacer';
import { Markdown } from '../../components/Markdown';
import { Section, SectionHeader, SectionContent } from '../../components/Section';
import { operationsForTagName } from '../../utils/openapi';
import { humanized } from '../../utils/string';
import { OasContext } from './OasContext';
import { OasSectionInner } from './OasSectionInner';

export const OasSectionOuter = ({ tag }) => (
  <OasContext.Consumer>
    {({ paths }) =>
      paths &&
      tag.name &&
      [operationsForTagName(tag.name, paths)].map(
        (operations, key) =>
          // render only if operations exist for tag name
          operations.length > 0 && (
            <Fragment key={key}>
              <Section>
                <SectionHeader>{humanized(tag.name)}</SectionHeader>
                <SectionContent>
                  {/* sub-section: description */}
                  {tag.description && (
                    <>
                      <Markdown text={tag.description} />
                      <Spacer />
                    </>
                  )}
                  {/* sub-section: operatons */}
                  {operations.map((operation, key) => operation && <OasSectionInner key={key} operation={operation} />)}
                  <Spacer multiplier={-1} />
                </SectionContent>
              </Section>
              <Spacer multiplier={3} />
            </Fragment>
          ),
      )
    }
  </OasContext.Consumer>
);
