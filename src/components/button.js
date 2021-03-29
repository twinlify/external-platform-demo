import styled, {css} from 'styled-components';

// -----------------------------------------------------------------------------

const $Button = styled.div`
  background-color: #1e7ab9;
  color: #ededed;
  border-radius: 5px;
  margin-right: 5px;
  box-sizing: border-box;
  font-size: 15px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #559aee;
  }

  ${props =>
    props.selected &&
    css`
      border: 3px solid #184378;
    `}

  transition: background-color 0.5s, border 0.2s;
`;

// -----------------------------------------------------------------------------

export default $Button;
