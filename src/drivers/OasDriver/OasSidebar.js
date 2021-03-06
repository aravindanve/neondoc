import React, { Fragment } from 'react';
import { Box } from 'rebass';
import { Spacer } from '../../components/Spacer';
import { LayoutSidebar } from '../../components/Layout';
import { Navigation, NavigationHeader, NavigationItem } from '../../components/Navigation';
import { humanized } from '../../utils/string';
import { operationsForTagName } from '../../utils/openapi';
import { OasContext } from './OasContext';
import { OasNavigationItem } from './OasNavigationItem';
import { NavigationSection } from '../../components/Navigation/NavigationSection';
import { SearchInput } from '../../components/SearchInput';

export const OasSidebar = () => (
  <LayoutSidebar>
    {/* TODO: implement tag groups, see x-tagGroups */}
    <SearchInput />
    <Spacer />
    <Box px={2}>
      <Navigation>
        {/* overview section header */}
        <NavigationHeader>Overview</NavigationHeader>
        {/* overview section links */}
        <NavigationItem>Introduction</NavigationItem>
      </Navigation>
      <Spacer />
      <OasContext.Consumer>
        {({ tags, paths }) =>
          tags &&
          tags.map(
            (tag) =>
              paths &&
              tag.name &&
              [operationsForTagName(tag.name, paths)].map(
                (operations, key) =>
                  operations.length > 0 && (
                    <Fragment key={key}>
                      <Navigation>
                        <NavigationSection>
                          {/* navigation section header */}
                          <NavigationHeader>{humanized(tag.name)}</NavigationHeader>
                          {/* navigation section links */}
                          {operations.map(
                            (operation, key) => operation && <OasNavigationItem key={key} operation={operation} />,
                          )}
                        </NavigationSection>
                      </Navigation>
                      <Spacer />
                    </Fragment>
                  ),
              ),
          )
        }
      </OasContext.Consumer>
    </Box>
  </LayoutSidebar>
);
