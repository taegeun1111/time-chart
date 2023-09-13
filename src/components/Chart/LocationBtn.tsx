import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  selectedLocation: string;
  locationToggleHandler: (id: string) => void;
}

const LocationBtn = ({id, selectedLocation, locationToggleHandler}: Props) => {
  return (
    <StyledLocationBtn
      onClick={() => locationToggleHandler(id)}
      className={id === selectedLocation ? 'active' : ''}
    >
      {id}
    </StyledLocationBtn>
  );
};

export default LocationBtn;

const StyledLocationBtn = styled.button`
  padding: 10px 15px;
  margin: 0 3px;
  background-color: #568dff;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;

  &.active {
    background-color: #06307b;
    font-weight: 700;
  }
`;
