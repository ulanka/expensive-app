import React from 'react';
import { connect } from 'react-redux';
import selectExpensesSummary from '../selectors/expenses-total'
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount,expensesTotal}) => (
    <div>
        Viewing {expenseCount} expenses totaling {numeral(expensesTotal/100).format('$0,0.00')}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenseCount: state.expenses.length,
        expensesTotal: selectExpensesSummary(state.expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)

