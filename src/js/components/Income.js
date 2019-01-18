import React from 'react'
import {Link} from 'react-router-dom'

const Income = ({id, name, amount, source}) => (
    <Link to={`/incomes/${id}`}>
        <div className="expense">
            <div className="expense__header">
            <h3 className="expense__name">
                <span className="expense__label">Income</span>
                <br/>
                {name}
            </h3>
            <p className="expense__amount">{amount}</p>
            </div>
            <p className="expense__description">{source}</p>
        </div>
    </Link>

)

export default Income