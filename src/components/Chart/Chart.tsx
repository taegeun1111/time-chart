import React from 'react';
import useChartData from '../../hooks/useChartData';
import {
    Area,
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';

const Chart = () => {
    const {chartData} = useChartData();

    return (
        <>
            <ResponsiveContainer width='100%' height={500}>
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
                    <Bar dataKey='value_bar' yAxisId='right' fill='#8884d8'>
                        {chartData.map((data, index) => (
                            <Cell key={index} fill={data.id} />
                        ))}
                    </Bar>
                    <Area type='monotone' dataKey='value_area' yAxisId='left' fill='#82ca9d'></Area>
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
};

export default Chart;
