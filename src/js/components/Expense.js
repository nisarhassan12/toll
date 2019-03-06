import React from 'react'
import {Link} from 'react-router-dom'

const Expense = ({id, name, amount, description, remove}) => (
        <div className="expense">
            <div className="expense__header">
            <Link to={`/expenses/${id}`}>
                <h3 className="expense__name">
                    <span className="expense__label">Expense</span>
                <br/>
                    {name}
                </h3>
            </Link>
            <div className="expense__amount">
                <p className="expense__value">{amount}</p>
                    <button 
                        className='btn'
                        onClick={() => {
                            remove('expenses',id)
                        }}
                    >
                        Remove
                    </button>
            </div>
            </div>
            <p className="expense__description">{description}</p>  
        </div>    
)

export default Expense