import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const IncomeExpenses = () => {
  const {transaction} = useContext(GlobalContext)

  const amount = transaction.map(transaction => transaction.amount)

  const income = amount.filter(item => item > 0).reduce((acc, item)=>(acc += item),0).toFixed(2);
  const expense = amount.filter(item => item < 0).reduce((acc, item)=>(acc += item),0).toFixed(2);

  return (
    <div className='inc-exp-container'>
        <div className='left'>
            <h4 style={{fontSize:"large"}}>INCOME</h4>
            <p className='money' id="money-plus" style={{color:"green", fontWeight:"600"}}>+₹{income}</p>
        </div>
        <hr style={{ margin:"2px 20px",backgroundColor:"black", height:"4rem"}}/>
        <div>
            <h4 style={{fontSize:"large"}}>EXPENSE</h4>
            <p className='money' id="money-minus" style={{color:"red", fontWeight:"600"}}>-₹{Math.abs(expense)}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses