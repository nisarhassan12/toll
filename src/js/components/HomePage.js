import React from 'react'
import {Link} from 'react-router-dom'

const DashBoard = () => (
    <section>
        <h1 className="heading-primary">Welcome to Toll</h1>
        <p className="descriptor">
           Manage Your Expenses and Incomes Painlessly.
        </p>
        <Link className="btn" to='/expenses'>Manage Expenses</Link>
        <Link className="btn" to='/incomes'>Manage Incomes</Link>
    </section>
)

export default DashBoard