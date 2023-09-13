import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

interface Props {
    id: string;
    selectedLocation: string;
    setSelectedLocation: Dispatch<SetStateAction<string>>;
}

const LocationBtn = ({id, selectedLocation, setSelectedLocation}: Props) => {
    const btnToggleHandler = () => {
        if (id === selectedLocation) {
            setSelectedLocation('');
        } else {
            setSelectedLocation(id);
        }
    };

    return (
        <StyledLocationBtn
            onClick={btnToggleHandler}
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
