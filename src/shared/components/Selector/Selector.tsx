import { FC } from 'react';

import { ICurrency } from 'src/shared/types';

import cn from 'classnames';
import './Selector.style.scss';

interface CurrencySelectorProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pickedItem: ICurrency | null;
  items: ICurrency[];
  pickItem: (id: string) => void;
}

export const Selector: FC<CurrencySelectorProps> = ({
  isOpen,
  setIsOpen,
  items,
  pickItem,
  pickedItem
}) => {
  const toggleSelector = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="selector">
      <div
        className={cn('selector-btn', { 'selector-btn-active': isOpen })}
        onClick={(e) => toggleSelector(e)}
      >
        <p className="text">{pickedItem?.id}</p>
        <img className="pic" src="/SVG/selector-arrow.svg" alt="arrow" />
      </div>
      {isOpen && (
        <div className="selector-content">
          {items.map((item) => (
            <div key={item.id} className="selector-item" onClick={() => pickItem(item.id)}>
              {item.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
