import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import {
    ResponsiveContainer,
    XAxis,
    Tooltip,
    CartesianGrid,
    ScatterChart,
    Scatter,
    ZAxis,
    YAxis,
} from 'recharts';
import { GetProductsResponse } from '@/interfaces';
import { BoxHeader } from '../BoxHeader';

export type PricesAndExpensesProps = {
    data: GetProductsResponse[] | undefined;
};

const PricesAndExpenses: React.FC<PricesAndExpensesProps> = ({ data }) => {
    const { palette } = useTheme();
    const productExpenseData = useMemo(() => {
        return (
            data &&
            data.map(({ _id, price, expense }) => {
                return {
                    id: _id,
                    price: price,
                    expense: expense,
                };
            })
        );
    }, [data]);

    return (
        <DashboardBox gridArea="f">
            <BoxHeader title="Product Prices and expenses" />
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 30,
                        bottom: 40,
                        left: 0,
                    }}
                >
                    <CartesianGrid stroke={palette.grey[800]} />
                    <XAxis
                        type="number"
                        dataKey="price"
                        name="price"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: '10px' }}
                        tickFormatter={(v) => `$${v}`}
                    />
                    <YAxis
                        type="number"
                        dataKey="expense"
                        name="expense"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: '10px' }}
                        tickFormatter={(v) => `$${v}`}
                    />
                    <ZAxis type="number" range={[20]} />
                    <Tooltip formatter={(v) => `$${v}`} />
                    <Scatter
                        name="Product Expense Ratio"
                        data={productExpenseData}
                        fill={palette.secondary[500]}
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
};

export default PricesAndExpenses;
