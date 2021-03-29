import React, {useState} from 'react';
import styled from 'styled-components';
import $Button from '../../../components/button';
import {device} from '@twinlify/walrus';

// -----------------------------------------------------------------------------

const $$Button = styled($Button)`
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
`;

// -----------------------------------------------------------------------------

const $Menu = styled.div`
  text-align: center;
  background-color: #222;
  height: calc(100vh - 80px);
  padding: 10px;
  font-size: 14px;
  box-sizing: border-box;
  width: 80px;

  @media ${device.tablet} {
    width: 300px;
  }

  transition: all 0.4s;
`;

const $List = styled.div`
  height: calc(100vh - 180px);
  overflow-x: hidden;
  overflow-y: scroll;
`;

// -----------------------------------------------------------------------------

const Menu = ({timeSeries, onSelect}) => {
  const [selectedNum, selectNum] = useState(0);
  const handleClick = num => () => {
    selectNum(num);
    onSelect(num);
  };

  return (
    <$Menu>
      <p>Selection: {selectedNum}</p>
      <$List>
        {timeSeries.map(([date, value], index) => (
          <$$Button
            onClick={handleClick(index)}
            key={index}
            selected={index === selectedNum}
            value={value}
            date={date}
          >
            {`data-${index}`}
          </$$Button>
        ))}
      </$List>
    </$Menu>
  );
};

// -----------------------------------------------------------------------------

export default Menu;
