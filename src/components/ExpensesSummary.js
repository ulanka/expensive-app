import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesSummary from '../selectors/expenses-total'
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount,expensesTotal}) => (
    <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expense<span>{expenseCount===1 ? '' : 's'}</span> totaling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span></h1>
        <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesSummary(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)

