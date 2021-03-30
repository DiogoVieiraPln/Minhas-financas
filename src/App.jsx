import Dashboard from './pages/Dashboard';


import './styles/global.css';
import TransactionsProvider from './context/TransactionsContext';

function App() {
  return (
    <TransactionsProvider>
      <Dashboard />
    </TransactionsProvider>
  );
}

export default App;
