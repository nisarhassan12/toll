import React from 'react'

const Summary = ({incomes, expenses}) => {

    let income = 0, expense = 0, excess = 0
    incomes.forEach(i => {
        income += parseFloat(i.amount)
    })
    expenses.forEach(i => {
        expense += parseFloat(i.amount)
    })

    const displayExcess = (excess)  => {
        if (income > expense) {
            return  (
                <span>
                     &nbsp;and <span className='summary__amount'>${excess}</span> in excess
                </span>
            )
        } 
    }

    excess = income - expense
    console.log( typeof income, typeof expense)
    return (
        <section className='summary'>
            <h2 className='heading-secondary'>Summary</h2>
            <p className='summary__p'>You have <span className='summary__amount'>${income}</span> in incomes and <span className='summary__amount'>${expense}</span> in expenses{displayExcess(excess)}.</p>
        </section>
    )
}

export default Summary