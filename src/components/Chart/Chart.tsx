import React from 'react';
import useChartData from '../../hooks/useChartData';
import {
    Area,
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const Chart = () => {
    const {chartData} = useChartData();

    return (
        <>
            <ResponsiveContainer height={700}>
                <ComposedChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    barGap={10}
                >
                    <CartesianGrid stroke='#f5f5f5' />
                    <XAxis dataKey='time' />
                    <YAxis
                        yAxisId='left'
                        label={{
                            value: 'value_area',
                            angle: -90,
                            position: 'insideLeft',
                            offset: 1,
                        }}
                    />
                    <YAxis
                        yAxisId='right'
                        orientation='right'
                        label={{
                            value: 'value_bar',
                            angle: 90,
                            position: 'insideRight',
                            offset: -10,
                        }}
                    />
                    <Tooltip content={<CustomTooltip active={false} payload={[]} />} />
                    <Legend height={50} />
                    <Bar dataKey='value_bar' barSize={15} fill='#1B64DA' yAxisId='right'>
                        {chartData.map((data, index) => (
                            <Cell key={index} fill={'#1B64DA'} />
                        ))}
                    </Bar>
                    <Area type='monotone' dataKey='value_area' yAxisId='left' fill='#7EF9FF'></Area>
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
};

export default Chart;
