import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    GetKpisResponse,
    GetProductsResponse,
    GetTransactionResponse,
} from '../interfaces';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'main',
    tagTypes: ['kpis', 'products', 'transactions'],
    endpoints: (build) => ({
        getKpi: build.query<Array<GetKpisResponse>, void>({
            query: () => 'api/v1/kpis/',
            providesTags: ['kpis'],
        }),
        getProduct: build.query<Array<GetProductsResponse>, void>({
            query: () => 'api/v1/products/',
            providesTags: ['products'],
        }),
        getTransaction: build.query<Array<GetTransactionResponse>, void>({
            query: () => 'api/v1/transactions/',
            providesTags: ['transactions'],
        }),
    }),
});

export const { useGetKpiQuery, useGetProductQuery, useGetTransactionQuery } =
    api;
