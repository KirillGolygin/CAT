import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type ICurrency from 'src/interfaces/Icurrency';

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
      set({ loading: true });

      try {
        const response = await fetch('https://api.coinbase.com/v2/currencies');
        if (!response.ok) throw new Error('Ошибка в получении данных, попробуйте снова');
        const data = await response.json();
        set({ currencies: data.data, pickedCurrency: data.data[0] });
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