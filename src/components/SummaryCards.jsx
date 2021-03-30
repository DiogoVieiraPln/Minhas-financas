import React, { useContext } from 'react';
import {TransactionsContext} from '../context/TransactionsContext'

import '../styles/SummaryCards.css';

function SummaryCards() {
const { transactions } = useContext (TransactionsContext)

const total = transactions.reduce((totalReduce, transaction) =>{
  if(transaction.type === 'Entrada'){
  return totalReduce += transaction.amount;}
  else{
    return totalReduce = totalReduce - transaction.amount
  }
}, 0)

const entradas = transactions.reduce((totalReduce, transaction) =>{
  if(transaction.type === 'Entrada'){
  return totalReduce += transaction.amount;}
  else{
    return totalReduce 
  }
}, 0)
const saidas = transactions.reduce((totalReduce, transaction) =>{
  if(transaction.type === 'Saída'){
  return totalReduce = totalReduce - transaction.amount}
  else{
    return totalReduce ;
  }
}, 0)


  return (
    <section id="summary">
      <div className="card-incomes">
        <h4>Entradas</h4>
        <strong>R$ {entradas.toFixed(2)}</strong>
      </div>

      <div className="card-expenses">
        <h4>Saídas</h4>
        <strong>R$ {saidas.toFixed(2)}</strong>
      </div>

      <div className="card-balance">
        <h4>Total</h4>
        <strong>R$ {total.toFixed(2)}</strong>
      </div>
    </section>
  )
}

export default SummaryCards;