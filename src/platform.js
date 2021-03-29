import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Header from './components/header';

import Demo1 from './demos/demo1';
import Demo2 from './demos/demo2';
import Demo3 from './demos/demo3';

// -----------------------------------------------------------------------------

const $App = styled.div`
  text-align: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// -----------------------------------------------------------------------------

const Platform = () => (
  <$App>
    <Header />
    <Switch>
      <Route exact path="/">
        <Redirect to={PATHS.demo1} />
      </Route>
      <Route path={PATHS.demo1} exact component={Demo1} />
      <Route path={PATHS.demo2} exact component={Demo2} />
      <Route path={PATHS.demo3} exact component={Demo3} />
    </Switch>
  </$App>
);

// -----------------------------------------------------------------------------

export default Platform;

export const PATHS = {
  demo1: '/demo1',
  demo2: '/demo2',
  demo3: '/demo3'
};
