import React, { useState,useContext } from "react";
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState('');

  const onSubmite = e => {
    e.preventDefault();
    const newTransaction = {
        id: Math.floor(Math.random() *100000),
        text,
        amount : +amount 
    }
  
    addTransaction(newTransaction);
    setAmount('');
    setText('');
  }

  return (
    <div>
      <h3 style={{ fontWeight: "300" }}>Add New Transaction</h3>
      <hr />
      <form onSubmit={onSubmite}>
        <div className="form-control">
          <label htmlFor="text" style={{ margin: "5px 0px" }}>
            TEXT
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{ height:"1.5rem",padding:"0 5px" }}
            placeholder="Please Enter The Text..... "
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" style={{ margin: "5px 0px" }}>
            Amount <br /> <span style={{ fontWeight:"200", fontSize:"small" }}>(negetive - expense, positive - income)</span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            style={{ height:"1.5rem",padding:"0 5px" }}
            placeholder="Please Enter The Amount..... "
          />
        </div>
        <button className="btn" style={{ height:"1.8rem",padding:"0 5px", backgroundColor:"#1e90ff", border:"none", color:"white", borderRadius:"5px"}}>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
