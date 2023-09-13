import React, {useState} from 'react';
import LocationBtn from '../../components/Chart/LocationBtn';
import useChartData from '../../hooks/useChartData';
import Chart from '../../components/Chart/Chart';
import styled from 'styled-components';

const Home = () => {
  const {chartUniqueLocation} = useChartData();
  const [selectedLocation, setSelectedLocation] = useState('');

  const locationToggleHandler = (id: string) => {
    if (id === selectedLocation) {
      setSelectedLocation('');
    } else {
      setSelectedLocation(id);
    }
  };
  return (
    <>
      <Chart selectedLocation={selectedLocation} locationToggleHandler={locationToggleHandler} />

      <StyledBtnWrapper>
        {chartUniqueLocation.map(id => (
          <LocationBtn
            key={id}
            id={id}
            selectedLocation={selectedLocation}
            locationToggleHandler={locationToggleHandler}
          />
        ))}
      </StyledBtnWrapper>
    </>
  );
};

export default Home;

const StyledBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
