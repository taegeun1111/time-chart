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
import {chartColors, VALUE_AREA_KEY, VALUE_BAR_KEY} from '../../constant/chart.const';

interface Props {
  selectedLocation: string;
  locationToggleHandler: (id: string) => void;
}

const Chart = ({selectedLocation, locationToggleHandler}: Props) => {
  const {chartData} = useChartData();
  const {chartStroke, lineDefaultColor, barDefaultColor, barActiveColor} = chartColors;

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
          <CartesianGrid stroke={chartStroke} />
          <XAxis dataKey='time' tick={{fontSize: 15}} />
          <YAxis
            yAxisId='left'
            label={{
              value: VALUE_AREA_KEY,
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
              value: VALUE_BAR_KEY,
              angle: 90,
              position: 'insideRight',
              offset: -10,
            }}
            tick={{fontSize: 15}}
          />
          <Tooltip
            content={
              <CustomTooltip active={false} payload={{id: '', value_area: 0, value_bar: 0}} />
            }
          />
          <Legend height={20} />
          <Bar
            dataKey={VALUE_BAR_KEY}
            barSize={13}
            yAxisId='right'
            fill={barDefaultColor}
            onClick={data => {
              locationToggleHandler(data.id);
            }}
          >
            {chartData.map((data, index) => (
              <Cell
                key={index}
                fill={data.id === selectedLocation ? barActiveColor : barDefaultColor}
              />
            ))}
          </Bar>
          <Area
            type='monotone'
            dataKey={VALUE_AREA_KEY}
            yAxisId='left'
            fill={lineDefaultColor}
            isAnimationActive={false}
            pointerEvents='none'
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
