import React, { useReducer, useEffect } from 'react';
import RefParser from '@apidevtools/json-schema-ref-parser';
import { Container } from '../../components/Container';
import { Layout, LayoutMain } from '../../components/Layout';
import { OasSidebar } from './OasSidebar';
import { OasIntroduction } from './OasIntroduction';
import { OasSectionOuter } from './OasSectionOuter';
import { OasContext } from './OasContext';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';

export const initialState = {
  loading: true,
  dereffedSpec: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'result':
      return {
        ...state,
        loading: false,
        dereffedSpec: action.payload,
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

export const OasDriver = ({ spec }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    RefParser.dereference(spec, (error, result) => {
      if (error) {
        dispatch({ type: 'error', payload: error });
      } else {
        dispatch({ type: 'result', payload: result });
      }
    });
  }, [spec]);

  return state.loading ? (
    <Loader />
  ) : state.error ? (
    <ErrorMessage message={state.error?.message} />
  ) : (
    <OasContext.Provider value={state.dereffedSpec || {}}>
      <Container>
        <Layout>
          {/* sidebar for tag navigation */}
          <OasSidebar />
          <LayoutMain>
            {/* section: introduction */}
            <OasIntroduction />
            <OasContext.Consumer>
              {({ tags }) =>
                tags &&
                tags.map((tag, key) => (
                  // section: tag
                  <OasSectionOuter key={key} tag={tag} />
                ))
              }
            </OasContext.Consumer>
          </LayoutMain>
        </Layout>
      </Container>
    </OasContext.Provider>
  );
};
