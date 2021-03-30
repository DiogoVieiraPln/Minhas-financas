import React, { useState } from 'react';

import NewTransactionModal from './NewTransactionModal';
import logoImg from '../assets/logo.png';

import '../styles/Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <header id="header">
      <div className="container">
        <a className="brand" href="/">
          <img src={logoImg} alt="Logo do My Finances"/>
          <h1>My Finances</h1>
        </a>

        <button
          type="button"
          className="new-transaction"
          onClick={() => { setIsModalOpen(true) }}
        >
          Nova Transação
        </button>
      </div>

      <NewTransactionModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </header>
  )
}

export default Header;