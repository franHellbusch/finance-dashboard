import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    CartesianGrid,
    Legend,
    LineChart,
} from 'recharts';
import { GetKpisResponse } from '@/interfaces';
import { BoxHeader } from '../BoxHeader';

export type ProfitAndRevenueProps = {
    data: GetKpisResponse[] | undefined;
};

const ProfitAndRevenue: React.FC<ProfitAndRevenueProps> = ({ data }) => {
    const { palette } = useTheme();
    const revenueProfit = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    profit: (revenue - expenses).toFixed(2),
                };
            })
        );
    }, [data]);

    return (
        <DashboardBox gridArea="b">
            <BoxHeader
                title="Profit and Revenue"
                subtitle="Blue line represents revenues, orange line represents expenses"
            />
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={revenueProfit}
                    margin={{
                        top: 20,
                        right: 0,
                        left: -10,
                        bottom: 55,
                    }}
                >
                    <CartesianGrid
                        vertical={false}
                        stroke={palette.grey[800]}
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        style={{ fontSize: '10px' }}
                    />
                    <YAxis
                        yAxisId="left"
                        tickLine={false}
                        axisLine={false}
                        style={{ fontSize: '10px' }}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        style={{ fontSize: '10px' }}
                    />
                    <Tooltip />
                    <Legend
                        height={20}
                        wrapperStyle={{
                            margin: '0 0 10px 0',
                        }}
                    />
                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="profit"
                        stroke={palette.secondary[500]}
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="revenue"
                        stroke={palette.primary.main}
                    />
                </LineChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
};

export default ProfitAndRevenue;
