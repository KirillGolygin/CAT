import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { fetchCurrencies } from '../api/coinbase/fetchCurrencies';

import type { ICurrency } from '../types';

interface ICurrencyStore {
  currencies: ICurrency[];
  loading: boolean;
  errorMessage: string | null;
  pickedCurrency: ICurrency | null;
  getCurrencies: () => void;
  pickCurrency: (id: string) => void;
}

const CurrencyStore = create<ICurrencyStore>()(
  devtools((set, get) => ({
    currencies: [],
    loading: false,
    errorMessage: null,
    pickedCurrency: null,
    getCurrencies: async () => {
      set({ loading: true, errorMessage: null });

      try {
        const response = await fetchCurrencies;
        if (response.status !== 200) throw new Error();
        const data = response.data.data;
        set({ currencies: data, pickedCurrency: data[0] });
      } catch (error) {
        if (error instanceof Error) {
          set({ errorMessage: error.message });
        }
      } finally {
        set({ loading: false });
      }
    },
    pickCurrency: (id: string) => {
      const currencies = get().currencies;
      const currency = currencies.find((cur) => cur.id === id);
      if (!currency) return;
      set({ pickedCurrency: currency });
    }
  }))
);

export default CurrencyStore;
