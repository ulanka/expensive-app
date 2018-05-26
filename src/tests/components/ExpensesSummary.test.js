import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary with 2 expenses totaling $94.34',() => {
    const prop = {
        expenseCount:2,
        expensesTotal:9434
    }
    const wrapper = shallow(<ExpensesSummary {...prop} />)
    expect(wrapper).toMatchSnapshot()
});

test('should render ExpensesSummary with 1 expenses totaling $94.34',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9434} />)
    expect(wrapper).toMatchSnapshot()
});