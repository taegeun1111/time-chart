import React from 'react';

interface Props {
    location: string;
}
const LocationBtn = ({location}: Props) => {
    return <button>{location}</button>;
};

export default LocationBtn;
