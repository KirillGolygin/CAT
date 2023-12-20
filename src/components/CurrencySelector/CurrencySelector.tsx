import './CurrencySelector.style.scss';

const CurrencySelector = () => {
  return (
    <div className="selector">
      <div className="selector-btn">
        <p className="text">RUB</p>
        <img className="pic" src="/SVG/selector-arrow.svg" alt="arrow" />
      </div>
      <div className="selector-content">
        <div className="selector-item">RUB</div>
        <div className="selector-item">USD</div>
        <div className="selector-item">USD</div>
      </div>
    </div>
  );
};

export default CurrencySelector;
