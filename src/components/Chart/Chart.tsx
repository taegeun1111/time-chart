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

interface Props {
    selectedLocation: string;
}
const Chart = ({selectedLocation}: Props) => {
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
                    <XAxis dataKey='time' tick={{fontSize: 15}} />
                    <YAxis
                        yAxisId='left'
                        label={{
                            value: 'value_area',
                            angle: -90,
                            position: 'insideLeft',
                            offset: 10,
                        }}
                        domain={[0, 200]}
                        tick={{fontSize: 15}}
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
                        tick={{fontSize: 15}}
                    />
                    <Tooltip
                        content={
                            <CustomTooltip
                                active={false}
                                payload={{id: '', time: '', value_area: 0, value_bar: 0}}
                            />
                        }
                    />
                    <Legend height={20} />
                    <Bar dataKey='value_bar' barSize={15} fill='#1B64DA' yAxisId='right'>
                        {chartData.map((data, index) => (
                            <Cell
                                key={index}
                                fill={data.id === selectedLocation ? '#0d45ab' : '#72b0ff'}
                            />
                        ))}
                    </Bar>
                    <Area type='monotone' dataKey='value_area' yAxisId='left' fill='#b6fffe' />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
};

export default Chart;
