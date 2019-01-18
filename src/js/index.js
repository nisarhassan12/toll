/* ------------------------------------- */
/* ----- Toll ----- */
/* ------------------------------------- */

import React from 'react'
import ReactDOM from 'react-dom'
import '../scss/main.scss'
import App from './components/App'

ReactDOM.render(<App />, document.querySelector('#app'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import { setPersistedExpenses} from './actions/expenses'
// import { setPersistedIncomes } from './actions/incomes';
// import configureStore from './store/configureStore'
// import AppRouter from './routers/AppRouter'
// import '../scss/main.scss'

// const store = configureStore()

// try {
//     const expenses = JSON.parse(localStorage.getItem('expenses')) || []
//     store.dispatch(setPersistedExpenses(expenses))
// } catch (e) {

// }

// try {
//     const incomes = JSON.parse(localStorage.getItem('incomes')) || []
//     store.dispatch(setPersistedIncomes(incomes))
// } catch (e) {
// } 



// store.subscribe(() => {
//     console.log(store.getState().expenses)
//     localStorage.setItem('expenses', JSON.stringify(store.getState().expenses))
//     localStorage.setItem('incomes', JSON.stringify(store.getState().incomes))
// })


  

// const jsx = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// )

// ReactDOM.render(jsx, document.querySelector('#app'))
