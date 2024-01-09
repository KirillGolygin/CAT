import type { FC } from 'react';

import './Logo.style.scss';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <h1 className="title">CAT</h1>
      <div className="transcript-container">
        <p className="transcript-text">currencies academic terms</p>
      </div>
    </div>
  );
};
