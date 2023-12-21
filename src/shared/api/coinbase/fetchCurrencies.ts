import coinBase from '.';

import type { ICurrency } from 'src/shared/types';

interface fetchCurrenciesResponse {
  data: ICurrency[];
}

export const fetchCurrencies = coinBase.get<fetchCurrenciesResponse>('currencies');
