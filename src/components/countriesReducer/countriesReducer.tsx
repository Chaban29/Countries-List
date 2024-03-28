import { IInitialCountries, initialCountries } from '../mock/countries.mock';

interface ICountryReducerProps {
  countries: IInitialCountries[];
}

export const initialState: ICountryReducerProps = {
  countries: initialCountries,
};

export const enum ActionsTypes {
  ADD = 'add',
  CHANGED = 'changed',
  DELETE = 'delete',
}

export type TypesActions =
  | { type: ActionsTypes.ADD; id: number; countryName: string }
  | { type: ActionsTypes.CHANGED; country: IInitialCountries }
  | { type: ActionsTypes.DELETE; countryId: number };

export const countriesReducer = (
  state = initialState,
  action: TypesActions
) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        countries: [
          ...state.countries,
          { id: action.id, countryName: action.countryName, done: false },
        ],
      };
    }
    case 'changed': {
      return {
        ...state,
        countries: state.countries.map((c) => {
          if (c.id === action.country.id) {
            return action.country;
          } else {
            return c;
          }
        }),
      };
    }
    case 'delete': {
      return {
        ...state,
        countries: state.countries.filter((c) => c.id !== action.countryId),
      };
    }
    default: {
      throw new Error(`Unknown action ${action.type}`);
    }
  }
};
