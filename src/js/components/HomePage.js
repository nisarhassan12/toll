import React from 'react'
import {Link} from 'react-router-dom'
import Summary from './Summary'

const DashBoard = (props) => (
    <section>
        <h1 className="heading-primary">Welcome to Toll</h1>
        <p className="descriptor">
           Manage budgets painlessly.
        </p>
        {/* 
            <Link className="btn" to='/expenses'>Manage Expenses</Link>
            <Link className="btn" to='/incomes'>Manage Incomes</Link>
        */}
        <Summary {...props}/>
    </section>
)

export default DashBoard