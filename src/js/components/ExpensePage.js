import React from 'react'
import {Link} from 'react-router-dom'
import Expense from './Expense'

const ExpensePage = ({expenses, remove}) => (
    <section className="expenses">
        <h1 className='heading-primary'>Expenses</h1>
        <Link to='/createExpense' className='btn'>Add Expense</Link>
        {
            expenses.length > 0 && expenses.map((expense) => <Expense key={expense.id} {...expense} remove={remove} />) || (<p className='descriptor'>Please Add Some of Your Incomes for Getting Started.</p>)
        }
    </section>
)

export default ExpensePage