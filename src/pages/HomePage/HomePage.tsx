import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import CurrencyStore from 'src/shared/store/currency-store';

import { Logo, Selector } from 'src/shared/components';

import './HomePage.style.scss';

const HomePage = () => {
  const { getCurrencies, pickedCurrency, errorMessage, currencies, pickCurrency, loading } =
    CurrencyStore();
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  const closeSelector = () => {
    setIsSelectorOpen(false);
  };

  const pickCur = (id: string) => {
    pickCurrency(id);
    setIsSelectorOpen(false);
  };

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return (
    <section className="container" onClick={closeSelector}>
      <div className="main-container">
        <div className="logo-container">
          <Logo />
          <Selector
            items={currencies}
            pickItem={(id) => pickCur(id)}
            isOpen={isSelectorOpen}
            setIsOpen={setIsSelectorOpen}
            pickedItem={pickedCurrency}
          />
        </div>
        <div className="pic-container">
          <img src="/Kitten.png" />
        </div>
      </div>
      <div className="currency-name-container">
        <p className="currency-name"> {errorMessage ? errorMessage : pickedCurrency?.name}</p>
        <ClipLoader className="loader" color="#fff" size={50} loading={loading} />
      </div>
    </section>
  );
};

export default HomePage;
