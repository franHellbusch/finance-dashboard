import { Box } from '@mui/material';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
    GridTemplateLargeScreen,
    GridTemplateSmallScreen,
} from './styled-components';
import {
    useGetKpiQuery,
    useGetProductQuery,
    useGetTransactionQuery,
} from '@/state/api';
import {
    CampingsAndTargets,
    ExpenseBreakdown,
    OperationalAndNot,
    OverallSummaryAndExps,
    PricesAndExpenses,
    ProductList,
    ProfitAndRevenue,
    RevenueAndExpenses,
    RevenueMonth,
    TransactionList,
} from './components';
export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    const { data: KPIs } = useGetKpiQuery();
    const { data: products } = useGetProductQuery();
    const { data: transactions } = useGetTransactionQuery();
    const isAboveMediumScreen = useMediaQuery('(min-width: 1200px)');

    return (
        <Box
            width="100%"
            height="100%"
            display="grid"
            gap="1.5rem"
            sx={
                isAboveMediumScreen
                    ? {
                          gridTemplateAreas: GridTemplateLargeScreen,
                          gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
                          gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
                      }
                    : {
                          gridAutoColumns: '1fr',
                          gridAutoRows: '80px',
                          gridTemplateAreas: GridTemplateSmallScreen,
                      }
            }
        >
            <RevenueAndExpenses data={KPIs}></RevenueAndExpenses>
            <ProfitAndRevenue data={KPIs}></ProfitAndRevenue>
            <RevenueMonth data={KPIs}></RevenueMonth>
            <OperationalAndNot data={KPIs}></OperationalAndNot>
            <CampingsAndTargets></CampingsAndTargets>
            <PricesAndExpenses data={products}></PricesAndExpenses>
            <ProductList data={products}></ProductList>
            <TransactionList data={transactions}></TransactionList>
            <ExpenseBreakdown kpiData={KPIs}></ExpenseBreakdown>
            <OverallSummaryAndExps></OverallSummaryAndExps>
        </Box>
    );
};

export default Dashboard;
