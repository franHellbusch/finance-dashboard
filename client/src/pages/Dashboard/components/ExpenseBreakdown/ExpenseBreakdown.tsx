import React, { useMemo } from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import { Cell, Pie, PieChart } from 'recharts';
import { Box, Typography, useTheme } from '@mui/material';
import { BoxHeader } from '../BoxHeader';
import FlexBetween from '@/styled-components/FlexBetween';
import { GetKpisResponse } from '@/interfaces';

export type ExpenseBreakdownProps = {
    kpiData: GetKpisResponse[] | undefined;
};

const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({ kpiData }) => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[300]];

    const pieChartData = useMemo(() => {
        if (kpiData) {
            const totalExpenses = kpiData[0].totalExpenses;
            return Object.entries(kpiData[0].expensesByCategory).map(
                ([key, value]) => {
                    return [
                        { name: key, value: value },
                        {
                            name: `${key} of total`,
                            value: totalExpenses - value,
                        },
                    ];
                }
            );
        }
    }, [kpiData]);

    return (
        <DashboardBox gridArea="i">
            <BoxHeader title="Expense Breakdown by category" sideText="+4%" />
            <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
                {pieChartData?.map((data, i) => (
                    <Box key={`${data[0].name}-${i}`}>
                        <PieChart width={70} height={80}>
                            <Pie
                                stroke="none"
                                data={data}
                                innerRadius={15}
                                outerRadius={35}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {data?.map((_entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={pieColors[index]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                        <Typography variant="h5">{data[0].name}</Typography>
                    </Box>
                ))}
            </FlexBetween>
        </DashboardBox>
    );
};

export default ExpenseBreakdown;
