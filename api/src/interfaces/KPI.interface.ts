import { Document } from "mongoose";

export interface ExpenseCategory {
    [key: string]: number;
}

export interface MonthData {
    month: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
}

export interface DayData {
    day: string;
    revenue: number;
    expenses: number;
}

export interface KPI extends Document {
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpenseCategory;
    monthlyData: MonthData[];
    daylyData: DayData[];
}
