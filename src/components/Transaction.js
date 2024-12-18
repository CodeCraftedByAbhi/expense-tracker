import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {

  const { deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <><li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text}
    <span>{sign}₹{Math.abs(transaction.amount)}
    <button class="delete-btn" onClick={() => deleteTransaction(transaction.id)}><span class="material-symbols-outlined">
delete_forever
</span></button>
    </span>
</li></>
  )
}

export default Transaction