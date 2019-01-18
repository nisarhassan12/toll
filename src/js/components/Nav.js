import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => (
    <nav role="navigation" className="nav">
        <div className="nav__container">
            <ul className="nav__items">
                <NavLink to='/' className="nav__item" activeClassName='nav__item--active' exact={true}>
                Home
                </NavLink>
                <NavLink to='/expenses' className="nav__item" activeClassName='nav__item--active'>
                Expenses
                </NavLink>
                <NavLink  to='/incomes' className="nav__item" activeClassName='nav__item--active'>
                    Incomes
                </NavLink>
                <NavLink  to='/about' className="nav__item" activeClassName='nav__item--active'>
                    About
                </NavLink>
            </ul>
        </div>
    </nav>
)

export default Nav