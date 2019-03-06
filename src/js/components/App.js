import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import uuid from 'uuid'
import {fetchData, persistData} from '../storage/localStorage'
import Nav from './Nav'
const HomePage = lazy(() => import('./HomePage'))
const ExpensePage = lazy(() => import('./ExpensePage'))
const ExpenseForm = lazy(() => import('./ExpenseForm'))
const ExpenseShowPage = lazy(() => import('./ExpenseShowPage'))
const IncomePage = lazy(() => import('./IncomePage'))
const IncomeForm = lazy(() => import('./IncomeForm'))
const IncomeShowPage = lazy(() => import('./IncomeShowPage'))
const About = lazy(() => import('./AboutPage'))
import Loader from './Loader'


class App extends React.Component {
    
    state = {
        expenses: [],
        incomes: []
    }

    addItem = (to, item) => {
        item.id = uuid()
        this.setState(() => ({
            [to]: [item, ...this.state[to]]
        }))
    }

    find = (from, id) => this.state[from].find(item => item.id === id)

    remove = (from, id) => {
        this.setState(() => ({
            [from]: this.state[from].filter((expense) => expense.id !== id)
        }))
    }

 
    componentDidMount() {
        const expenses = fetchData('expenses')
        const incomes = fetchData('incomes')
        expenses && expenses.length > 0 && this.setState(() => ({expenses}))
        incomes && incomes.length > 0 && this.setState(() => ({incomes}))
    }

    componentDidUpdate() {
        persistData('expenses', this.state.expenses)
        persistData('incomes', this.state.incomes)
    }

    render() {
        const {expenses, incomes} = this.state
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <div className="container">
                            <Suspense fallback={<Loader />}>
                                    <Route
                                        path='/' 
                                        component={() => <HomePage {...this.state} />}
                                        exact
                                    />
                                
                                    <Route 
                                        path='/expenses' 
                                        component={() => 
                                            <ExpensePage 
                                                expenses={expenses} 
                                                remove={this.remove}
                                            />} 
                                        exact
                                    />
                                    <Route 
                                        path='/createExpense'
                                        component={
                                            (props) => <ExpenseForm  
                                                addItem={this.addItem}  
                                                {...props}
                                            />
                                        }
                                    />
                                    <Route 
                                        path='/expenses/:id' 
                                        component={(props) => <ExpenseShowPage match={props.match} find={this.find} /> }
                                    />
                                    <Route 
                                        path='/incomes' 
                                        component={() => 
                                            <IncomePage 
                                                incomes={incomes} 
                                                remove={this.remove}
                                            />}
                                        exact
                                    />
                                    <Route 
                                        path='/createIncome'
                                        component={(props) => <IncomeForm 
                                                addItem={this.addItem}  
                                                {...props}
                                            />}
                                    />
                                    <Route 
                                        path='/incomes/:id' 
                                        component={(props) => <IncomeShowPage match={props.match} find={this.find} /> }
                                    />
                                    <Route 
                                        path='/about'
                                        component={() => <About />}
                                    />
                            </Suspense>
                        </div>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App