import React from 'react'


class Form extends React.Component {

    state = {
        name: '',
        amount: '',
        source: ''
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({name}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
    
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          this.setState(() => ({ amount }))
        }
    }

    onSourceChange = (e) => {
        const source = e.target.value
        this.setState(() => ({source}))
    }

    handleClear() {
        this.setState(() => ({name: '', amount: '', description: ''}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {history, addItem} = this.props
        addItem('incomes',this.state)
        history.push('/incomes')
    }

    render() {
        return (
            <React.Fragment>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h1 className='heading-primary'>Add Income</h1>
                    <input 
                        type='text'
                        value={this.state.name}
                        name='name'
                        placeholder='Name...'
                        onChange={this.onNameChange}
                        className='form__name'  
                        required  
                    />
                    <input
                        type="text"
                        value={this.state.amount}
                        name='amount'
                        placeholder='Amount...'
                        onChange={this.onAmountChange}
                        className="form__amount"
                        required
                    />
                    <input
                        type="text"
                        value={this.state.source}
                        name='description'
                        placeholder='Source'
                        onChange={this.onSourceChange}
                        className="form__description"
                    />
                    <button
                        className='form__button btn'
                    >
                        Add Income
                    </button>
                </form>
            </React.Fragment>
        )
    }

}


export default Form
