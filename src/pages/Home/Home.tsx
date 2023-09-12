import React from 'react';
import LocationBtn from '../../components/Chart/LocationBtn';
import useChartData from '../../hooks/useChartData';
import Chart from '../../components/Chart/Chart';

const Home = () => {
    const {chartUniqueLocation} = useChartData();

    return (
        <>
            <Chart />
            {chartUniqueLocation.map(location => (
                <LocationBtn key={location} location={location} />
            ))}
        </>
    );
};

export default Home;
