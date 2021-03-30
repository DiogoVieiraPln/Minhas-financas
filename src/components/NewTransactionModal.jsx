import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext} from '../context/TransactionsContext'

import '../styles/NewTransactionModal.css';

const NewTransactionModal = ({ isModalOpen, handleCloseModal }) => {
  const {addNewTransaction} = useContext( TransactionsContext )

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  // Função acionada sempre que é clicado sobre o botão
  function handleCreateNewTransaction() {
    handleCloseModal();
   
    const transactionData = {
      title: title,
      amount: amount,
      type: type,
      category: category,
    };
    addNewTransaction(transactionData)
  }

  

  // O código abaixo só é necessário para que o Modal saiba sobre qual elemento do HTML ele deverá ser renderizado
  // Lembra que o modal tem um position fixed (é fixo na tela)? Por isso, ele precisa saber sobre qual elemento ele
  // é fixo. Neste caso, coloquei ele fixo em relação à toda a aplicação (a div root do nosso index.html)
  Modal.setAppElement('#root');
  
  return (
    <Modal 
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      className="modal"
    >
      <div className="container">
        <h1>Nova transação</h1>
        
        <form>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="number"
            placeholder="0,00"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />

          <select
            name="type"
            id="type"
            defaultValue={type}
            onChange={(event) => {setType(event.target.value)}}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button
            type="button"
            onClick={handleCreateNewTransaction}
          >
            Cadastrar transação
          </button>
        </form>
      </div>
    </Modal>
  )
}


export default NewTransactionModal;