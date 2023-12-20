import { useEffect, useState } from 'react';

import CurrencyStore from './store/currency-store';

import CurrencySelector from './components/CurrencySelector/CurrencySelector';
import Logo from './components/Logo/Logo';

import './App.scss';

const App = () => {
  const getCurrencies = CurrencyStore((state) => state.getCurrencies);
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);
  const closeSelector = () => {
    setIsSelectorOpen(false);
  };
  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return (
    <div className="container" onClick={closeSelector}>
      <Logo />
      <CurrencySelector isOpen={isSelectorOpen} setIsOpen={setIsSelectorOpen} />
    </div>
  );
};

export default App;
