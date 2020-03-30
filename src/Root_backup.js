import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Box, Heading, Text } from 'rebass';
import { theme } from './theme';
import { sampleMarkdown } from './sampleMarkdown';
import { sampleText } from './sampleText';
import { Container } from './components/Container';
import { Spacer } from './components/Spacer';
import { Layout, LayoutMain, LayoutSidebar } from './components/Layout';
import { Navigation, NavigationHeader, NavigationItem } from './components/Navigation';
import { Markdown } from './components/Markdown';
import { Section, SectionHeader, SectionContent } from './components/Section';
import { SectionColor, SectionColorContent } from './components/SectionColor';
import { SectionSimple, SectionSimpleHeader, SectionSimpleContent } from './components/SectionSimple';
import { Schema, SchemaName, SchemaType, SchemaDescription } from './components/Schema';

export const Root = ({ ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    <Box variant="styles.root">
      <Container>
        <Layout>
          <LayoutSidebar>
            <Box p={3}>
              <Navigation>
                <NavigationHeader>Overview</NavigationHeader>
                <NavigationItem>Version Header</NavigationItem>
                <NavigationItem>Principal Header</NavigationItem>
                <NavigationItem>Authentication</NavigationItem>
              </Navigation>
              <Spacer />
              <Navigation>
                <NavigationHeader>Pets</NavigationHeader>
                <NavigationItem>GET Pets</NavigationItem>
                <NavigationItem>POST Pet</NavigationItem>
                <NavigationItem>PUT Pet</NavigationItem>
                <NavigationItem>GET Pet</NavigationItem>
                <NavigationItem>DELETE Pet</NavigationItem>
              </Navigation>
            </Box>
          </LayoutSidebar>
          <LayoutMain>
            <Box p={3}>
              <Heading variant="display">API Reference</Heading>
              <Spacer />
              <Text>
                <Markdown text={sampleText} />
              </Text>
              <Spacer />
              <Box>
                <Section>
                  <SectionHeader>Pets</SectionHeader>
                  <SectionContent>
                    <Markdown text={'Here are some __Pets__'} />
                    <Spacer />
                    <SectionColor inner={true} verb="options" path="/pets">
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>

                    <Spacer />
                    <SectionColor inner={true} title="Get Pets" verb="get" path="/pets">
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                        <Spacer />
                        <SectionSimple>
                          <SectionSimpleHeader>Request Body</SectionSimpleHeader>
                          <SectionSimpleContent>
                            <Schema>
                              <SchemaName>displayName</SchemaName>
                              <SchemaType required={true}>required string</SchemaType>
                              <SchemaDescription>
                                <Markdown text={'Human readable name for this resource.'} />
                              </SchemaDescription>
                            </Schema>
                            <Schema>
                              <SchemaName>metadata</SchemaName>
                              <SchemaType>optional object</SchemaType>
                              <SchemaDescription>
                                <Markdown
                                  text={
                                    'Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.'
                                  }
                                />
                              </SchemaDescription>
                            </Schema>
                            <Schema>
                              <SchemaName>phases</SchemaName>
                              <SchemaType>optional array of hashes</SchemaType>
                              <SchemaDescription>
                                <Markdown
                                  text={
                                    'List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `endDate` of one phase will always equal the `startDate` of the next phase. Note that past phases can be omitted.'
                                  }
                                />
                              </SchemaDescription>
                            </Schema>
                            <Schema>
                              <SchemaName>defaultSettings</SchemaName>
                              <SchemaType>optional object</SchemaType>
                              <SchemaDescription>
                                <Markdown text={'Object representing the subscription schedule’s default settings.'} />
                              </SchemaDescription>
                            </Schema>
                            <Schema>
                              <SchemaName>displayName</SchemaName>
                              <SchemaType>required string</SchemaType>
                              <SchemaDescription>Human readable name for this resource</SchemaDescription>
                            </Schema>
                          </SectionSimpleContent>
                        </SectionSimple>
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor inner={true} title="Create a Pet" verb="post" path="/pets">
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor
                      inner={true}
                      verb="options"
                      path="/pets/{petId}/someunusuallylongpath/{maybeBeAnUnusuallyLongParamNameToo}"
                    >
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor inner={true} verb="get" path="/pets/{petId}">
                      <SectionColorContent inner={true}>
                        <Markdown text={sampleMarkdown} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor inner={true} verb="put" path="/pets/{petId}">
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor
                      inner={true}
                      verb="patch"
                      path="/pets/{petId}/some-unusually-long-path/{maybeBeAnUnusuallyLongParamNameToo}"
                    >
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor inner={true} verb="delete" path="/pets/{petId}">
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <SectionColor inner={true} verb="head" path="/pets/{petId}">
                      <SectionColorContent inner={true}>
                        <Markdown text={'This is some **content**. And _markdown_ is supported here too.'} />
                      </SectionColorContent>
                    </SectionColor>
                    <Spacer />
                    <Markdown text={sampleMarkdown} />
                  </SectionContent>
                </Section>
              </Box>
              <Spacer />
              <Text>
                <Markdown text={sampleMarkdown} />
              </Text>
              <Spacer />
            </Box>
          </LayoutMain>
        </Layout>
      </Container>
    </Box>
  </ThemeProvider>
);
