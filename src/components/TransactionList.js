import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {

  const {transaction} = useContext(GlobalContext)

  return (
    <div className='transactionList' >
        <h3 style={{fontWeight:"300"}}>History</h3>
        <hr />
        <ul id="id" class="list">
          {transaction.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}></Transaction>))}
        </ul>
    </div>
  )
}

export default TransactionList