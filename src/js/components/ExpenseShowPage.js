import React from 'react'
import moment from 'moment'

const ExpenseShowPage = ({find, match}) => {

    const expense = find('expenses', match.params.id)

    return (
        <section className='show'>
            <div className="show__container">
                <h1 className="heading-primary">{expense.name}</h1>
                <p className='descriptor'>
                    This Expense was created <span>{moment(expense.createdAt).fromNow()}</span>.It has an amount: <span>{expense.amount}</span>.It has an Description of: <span>{expense.description}</span>.
                </p>
            </div>
        </section>
    )

}

export default ExpenseShowPage



