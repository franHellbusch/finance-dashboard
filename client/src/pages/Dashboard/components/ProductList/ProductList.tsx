import React from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import { GetProductsResponse } from '@/interfaces';
import { BoxHeader } from '../BoxHeader';
import { Box } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

export type ProductListProps = {
    data: GetProductsResponse[] | undefined;
};

const productColumns = [
    {
        field: '_id',
        headerName: 'id',
        flex: 1,
    },
    {
        field: 'expense',
        headerName: 'Expense',
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
        field: 'price',
        headerName: 'Price',
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`,
    },
];

const ProductList: React.FC<ProductListProps> = ({ data }) => {
    const { palette } = useTheme();
    return (
        <DashboardBox gridArea="g">
            <BoxHeader
                title="Product List"
                sideText={`${data?.length} Products`}
            />
            <Box
                mt="0.5rem"
                p="0 0.5rem"
                height="75%"
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
                    columns={productColumns}
                />
            </Box>
        </DashboardBox>
    );
};

export default ProductList;
