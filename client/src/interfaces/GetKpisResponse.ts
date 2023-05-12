export interface Day {
    expenses: number;
    id: string;
    month: string;
    revenue: number;
    _id: string;
}

export interface Month {
    expenses: number;
    id: string;
    month: string;
    nonOperationalExpenses: number;
    operationalExpenses: number;
    revenue: number;
    _id: string;
}

export interface ExpensesByCategory {
    salaries: number;
    supplies: number;
    services: number;
}

export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    updatedAt: string;
    createdAt: string;
    totalProfit: number;
    totalExpenses: number;
    totalRevenue: number;
    dailyData: Array<Day>;
    monthlyData: Array<Month>;
    expensesByCategory: ExpensesByCategory;
}
