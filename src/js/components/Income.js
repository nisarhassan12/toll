import React from 'react'
import {Link} from 'react-router-dom'

const Income = ({id, name, amount, source, remove}) => (
    <div className="expense">
    <div className="expense__header">
        <Link to={`/incomes/${id}`}>
            <h3 className="expense__name">
                <span className="expense__label">Income</span>
                <br/>
                {name}
                </h3>
        </Link>
            <div className="expense__amount">
                <p className="expense__value">{amount}</p>
                <button 
                    className='btn'
                    onClick={() => {
                        remove('incomes', id)
                    }}
                >
                    Remove
                </button>
            </div>
            </div>
            <p className="expense__description">{source}</p>
        </div>
)

export default Income