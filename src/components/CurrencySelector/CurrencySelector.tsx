import { FC } from 'react';

import CurrencyStore from 'src/store/currency-store';

import cn from 'classnames';
import './CurrencySelector.style.scss';

interface CurrencySelectorProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrencySelector: FC<CurrencySelectorProps> = ({ isOpen, setIsOpen }) => {
  const { currencies, pickedCurrency, pickCurrency } = CurrencyStore();
  const pickCur = (id: string) => {
    pickCurrency(id);
    setIsOpen(false);
  };
  const toggleSelector = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="selector">
      <div
        className={cn('selector-btn', { 'selector-btn-active': isOpen })}
        onClick={(e) => toggleSelector(e)}>
        <p className="text">{pickedCurrency?.id}</p>
        <img className="pic" src="/SVG/selector-arrow.svg" alt="arrow" />
      </div>
      {isOpen && (
        <div className="selector-content">
          {currencies.map((cur) => (
            <div key={cur.id} className="selector-item" onClick={() => pickCur(cur.id)}>
              {cur.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
