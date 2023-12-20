import { create } from 'zustand';

import type ICurrency from 'src/interfaces/Icurrency';

interface ICurrencyStore {
  currencies: ICurrency[];
}

const useStore = create<ICurrencyStore>()((set) => ({
  currencies: []
}));
