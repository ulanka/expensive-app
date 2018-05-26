import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesSummary from '../selectors/expenses-total'
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount,expensesTotal}) => (
    <div>
        Viewing {expenseCount} expense{expenseCount===1 ? '' : 's'} totaling {numeral(expensesTotal/100).format('$0,0.00')}
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

