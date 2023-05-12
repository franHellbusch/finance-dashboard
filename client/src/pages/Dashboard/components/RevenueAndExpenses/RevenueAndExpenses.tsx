import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import { GetKpisResponse } from '@/interfaces';
import { BoxHeader } from '../BoxHeader';

export type RevenueAndExpensesProps = {
    data: GetKpisResponse[] | undefined;
};

const RevenueAndExpenses: React.FC<RevenueAndExpensesProps> = ({ data }) => {
    const { palette } = useTheme();
    const revenueExpenses = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                };
            })
        );
    }, [data]);

    return (
        <DashboardBox gridArea="a">
            <BoxHeader
                title="Revenue and Expenses"
                subtitle="Top line represents revenues, bottom line represents expenses"
                sideText="+4%"
            />
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={revenueExpenses}
                    margin={{
                        top: 15,
                        right: 25,
                        left: -10,
                        bottom: 60,
                    }}
                >
                    <defs>
                        <linearGradient
                            id="colorRevenue"
                            x1={0}
                            x2={0}
                            y1={0}
                            y2={1}
                        >
                            <stop
                                offset="5%"
                                stopColor={palette.primary[300]}
                                stopOpacity={0.5}
                            />
                            <stop
                                offset="95%"
                                stopColor={palette.primary[300]}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        style={{ fontSize: '10px' }}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={{ strokeWidth: '0' }}
                        style={{ fontSize: '10px' }}
                        domain={[8000, 23000]}
                    />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke={palette.primary.main}
                        dot={true}
                        fillOpacity={1}
                        fill="url('#colorRevenue')"
                    />
                    <Area
                        type="monotone"
                        dataKey="expenses"
                        stroke={palette.primary.main}
                        dot={true}
                        fillOpacity={1}
                        fill="url('#colorExpenses')"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
};

export default RevenueAndExpenses;
