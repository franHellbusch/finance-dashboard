import React from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import { GetTransactionResponse } from '@/interfaces';
import { BoxHeader } from '../BoxHeader';
import { Box } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

export type TransactionListProps = {
    data: GetTransactionResponse[] | undefined;
};

const transactionColumns = [
    {
        field: '_id',
        headerName: 'id',
        flex: 1,
    },
    {
        field: 'buyer',
        headerName: 'Buyer',
        flex: 0.67,
        renderCell: (params: GridCellParams) => `${params.value}`,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        flex: 0.35,
        renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
        field: 'productIds',
        headerName: 'Count',
        flex: 0.1,
        renderCell: (params: GridCellParams) =>
            (params.value as Array<string>).length,
    },
];

const TransactionList: React.FC<TransactionListProps> = ({ data }) => {
    const { palette } = useTheme();
    return (
        <DashboardBox gridArea="h">
            <BoxHeader
                title="Transaction List"
                sideText={`${data?.length} Transactions`}
            />
            <Box
                mt="0.5rem"
                p="0 0.5rem"
                height="80%"
                sx={{
                    '& .MuiDataGrid-root': {
                        color: palette.grey[300],
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: `1px solid ${palette.grey[800]} !important`,
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        borderBottom: `1px solid ${palette.grey[800]} !important`,
                    },
                    '& .MuiDataGrid-columnSeparator': {
                        visibility: 'hidden',
                    },
                }}
            >
                <DataGrid
                    columnHeaderHeight={25}
                    rowHeight={35}
                    hideFooter={true}
                    rows={data || []}
                    columns={transactionColumns}
                />
            </Box>
        </DashboardBox>
    );
};

export default TransactionList;
