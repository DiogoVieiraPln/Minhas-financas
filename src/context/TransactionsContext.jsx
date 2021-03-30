import { createContext, useEffect, useState } from "react";

export const TransactionsContext = createContext({});

const TransactionsProvider = ({children}) => {
  const [transactions, setTransactions] = useState([

  ]);

  useEffect(() => {
    const data = localStorage.getItem('@my-finances:transactions');
    if (data) {
      setTransactions(JSON.parse(data));
    }
    
  }, []);

  // Desenvolva toda a lógica do projeto aqui

  const addNewTransaction = (transactionData) => {
  
    const newTransactions = [...transactions, transactionData ]

    setTransactions(newTransactions)

    localStorage.setItem('@my-finances:transactions', JSON.stringify(newTransactions) )
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      addNewTransaction,

    }}>
      { children }
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider;