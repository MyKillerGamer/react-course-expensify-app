import React from 'react';
import Header from '../components/Header';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;