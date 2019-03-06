import React from 'react'
import {Link} from 'react-router-dom'
import Income from './Income'

const IncomePage = ({incomes, remove}) => (
    <section className="expenses">
        <h1 className='heading-primary'>Incomes</h1>
        <Link to='/createIncome' className='btn'>Add Income</Link>
        {
            incomes.length > 0 && incomes.map((income) => <Income key={income.id} {...income} remove={remove} />) || (<p className='descriptor'>Please Add Some of Your Incomes for Getting Started.</p>)
        }
    </section>
)



export default IncomePage