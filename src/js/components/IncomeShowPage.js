import React from 'react'
import moment from 'moment'

const IncomeShowPage = ({find, match}) => {
    const income = find('incomes', match.params.id)
    console.log(income)
    return (
        <section className='show'>
            <div className='show__container'>
                <h1 className="heading-primary">{income.name}</h1>
                <p className='descriptor'>This Income was created <span>{moment(income.createdAt).fromNow()}</span>.It has an amount: <span>{income.amount}</span>.Its source is: <span>{income.source}</span>.</p>
            </div>
        </section>
    )
}

export default IncomeShowPage