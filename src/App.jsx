import Dashboard from './pages/Dashboard';
import { initialData } from './data/initialData';

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
