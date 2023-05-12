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
    LineChart,
} from 'recharts';
import { GetKpisResponse } from '@/interfaces';
import { BoxHeader } from '../BoxHeader';

export type OperationalAndNotProps = {
    data: GetKpisResponse[] | undefined;
};

const OperationalAndNot: React.FC<OperationalAndNotProps> = ({ data }) => {
    const { palette } = useTheme();
    const OperationalExpenses = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(
                ({ month, operationalExpenses, nonOperationalExpenses }) => {
                    return {
                        name: month.substring(0, 3),
                        'Non Operational Expenses': nonOperationalExpenses,
                        'Operational Expenses': operationalExpenses,
                    };
                }
            )
        );
    }, [data]);

    return (
        <DashboardBox gridArea="d">
            <BoxHeader
                title="Operational VS Non-Operational Expenses"
                subtitle="Blue line represents Operational, orange line represents Non-Operational expenses"
            />
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={OperationalExpenses}
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
                        orientation="left"
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
                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Non Operational Expenses"
                        stroke={palette.secondary[500]}
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="Operational Expenses"
                        stroke={palette.primary.main}
                    />
                </LineChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
};

export default OperationalAndNot;
