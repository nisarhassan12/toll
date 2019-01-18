import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import HomePage from './HomePage'
import ExpensePage from './ExpensePage'
import ExpenseForm from './ExpenseForm'
import ExpenseShowPage from './ExpenseShowPage'
import IncomePage from './IncomePage'
import IncomeForm from './IncomeForm'
import IncomeShowPage from './IncomeShowPage'


class App extends React.Component {
    
    state = {
        expenses: [
            {
                id: 1,
                name: 'Apple',
                amount: 1000,
                description: 'The Apple That I Bought last Night.'
            },
            {
                id: 2,
                name: 'Orange',
                amount: 2000,
                description: 'Orange That i Bought Last Night.'
            }
        ],
        incomes: [
            {
                id: 1,
                name: 'Profit',
                amount: 1000,
                source: 'A Side Project'
            },
            {
                id: 2,
                name: 'Unknown',
                amount: 3000,
                source: 'Unknown'
            }
        ]
    }

    addItem = (to, item) => {
        console.log(to, item)
        this.setState(() => ({
            to: [item, ...this.state[to]]
        }))
        console.log(to, this.state[to])
    }

    find = (from, id) =>this.state[from].find(item => item.id === parseInt(id))
 

    render() {
        const {expenses, incomes} = this.state
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <div className="container">
                            <Route  
                                path='/' 
                                component={() => <HomePage />}
                                exact
                            />
                            <Route 
                                path='/expenses' 
                                component={() => <ExpensePage expenses={expenses} find={this.find} />} 
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
                                component={() => <IncomePage incomes={incomes} />}
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
                        </div>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App