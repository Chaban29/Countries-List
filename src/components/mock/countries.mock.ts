export interface IInitialCountries {
  id: number;
  countryName: string;
  done: boolean;
}

export const initialCountries: IInitialCountries[] = [
  { id: 0, countryName: 'Ukraine', done: true },
  { id: 1, countryName: 'Poland', done: false },
  { id: 2, countryName: 'Germany', done: false },
  // { id: 3, countryName: 'France', done: false },
  // { id: 4, countryName: 'USA', done: false },
  // { id: 5, countryName: 'Austria', done: false },
  // { id: 6, countryName: 'China', done: false },
  // { id: 7, countryName: 'Switzerland', done: false },
];
