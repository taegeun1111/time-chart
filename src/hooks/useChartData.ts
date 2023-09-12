import {useEffect, useState} from 'react';
import {httpClient} from '../api/httpClient';
import {IChart, IResponseData} from '../types/chart';

const useChartData = () => {
    const [chartData, setChartData] = useState<IChart[]>([]);
    const getChart = async () => {
        const data: IResponseData = await httpClient();
        const updateData: IChart[] = Object.entries(data).map(([time, data]) => ({
            time,
            ...data,
        }));
        console.log('updateData: ', updateData);
        setChartData(updateData);
    };

    useEffect(() => {
        getChart();
    }, []);

    const chartUniqueLocation = [...new Set(chartData.map(chart => chart.id))].sort();

    return {chartData, chartUniqueLocation};
};

export default useChartData;
