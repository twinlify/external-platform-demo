import React from 'react';
import styled from 'styled-components';
import $Button from './button';

// -----------------------------------------------------------------------------

import GithubCorner from './github-corner';
import Logo from './logo';

// -----------------------------------------------------------------------------

const HEADER_HEIGHT = 80;

// -----------------------------------------------------------------------------

const $$Button = styled($Button)`
  width: ${HEADER_HEIGHT - 10}px;
  height: ${HEADER_HEIGHT - 10}px;
`;

// -----------------------------------------------------------------------------

const $Header = styled.div`
  background-color: #123;

  height: ${HEADER_HEIGHT}px;
  width: 100%;
  padding: 0px 120px 0px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const $DemoSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// -----------------------------------------------------------------------------

const Header = ({selectDemo, selectedDemo}) => {
  const handleClick = num => () => selectDemo(num);

  const Buttons = [1, 2, 3].map(num => (
    <$$Button
      key={num}
      selected={selectedDemo === num}
      onClick={handleClick(num)}
    >
      Demo {num}
    </$$Button>
  ));

  return (
    <$Header>
      <Logo />
      <$DemoSelection>
        {Buttons}
        <GithubCorner />
      </$DemoSelection>
    </$Header>
  );
};

// -----------------------------------------------------------------------------

export default Header;
