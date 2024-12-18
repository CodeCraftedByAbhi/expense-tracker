import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transaction} = useContext(GlobalContext)

  const amount = transaction.map(transaction => transaction.amount)

  const total = amount.reduce((acc, item) => (acc += item),0).toFixed(2);

  return (
    <div className='balancesheet'>
        <h3>Your Balance</h3>
        <p>₹{total}</p>
    </div>
  )
}

export default Balance