import React from 'react';

import Header from '../components/Header';
import SummaryCards from '../components/SummaryCards';
import TransactionsTable from '../components/TransactionsTable';

import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Header />
      <main id="main-content">
        <SummaryCards />
        <TransactionsTable />
      </main>
    </div>
  )
}

export default Dashboard;