import React, { useContext } from 'react';

import { TransactionsContext } from '../context/TransactionsContext';


import '../styles/TransactionsTable.css';

function TransactionsTable() {
  const {transactions} = useContext(TransactionsContext)

  return (
    <section id="transactions-table">  
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Tipo</th>
            <th>Categoria</th>
          </tr>
        </thead>

        <tbody>
          { transactions.map((transaction) => (
          <tr>
            <td>{transaction.title}</td>
            <td>R$ {transaction.amount.toFixed(2)}</td>
            <td>{transaction.type}</td>
            <td>{transaction.category}</td>
          </tr>
            )) }
        </tbody>
      </table>
    </section>
  )
}

export default TransactionsTable;