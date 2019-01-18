import React from 'react'
import {Link} from 'react-router-dom'

const Expense = ({id, name, amount, description}) => (
    <Link to={`expenses/${id}`}>
    <div className="expense">
        <div className="expense__header">
        <h3 className="expense__name">
            <span className="expense__label">Expense</span>
            <br/>
            {name}
        </h3>
        <p className="expense__amount">{amount}</p>
        </div>
        <p className="expense__description">{description}</p>  
    </div>
    </Link>    
)

export default Expense