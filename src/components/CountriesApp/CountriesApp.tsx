import { FC, useReducer } from 'react';
import { IInitialCountries } from '../mock/countries.mock';
import { AddCountry } from '../AddCountry/AddCountry';
import { CountryList } from '../CountriesList/CountryList';
import {
  ActionsTypes,
  countriesReducer,
  initialState,
} from '../countriesReducer/countriesReducer';

let nextId = 3;

export const CountriesApp: FC = () => {
  const [countries, dispatch] = useReducer(countriesReducer, initialState);

  const handleAddNewCountry = (text: string) => {
    dispatch({ type: ActionsTypes.ADD, id: nextId++, countryName: text });
  };

  const handleChangeCountryName = (country: IInitialCountries) => {
    dispatch({ type: ActionsTypes.CHANGED, country: country });
  };

  const handleDeleteCountry = (countryId: number) => {
    dispatch({ type: ActionsTypes.DELETE, countryId: countryId });
  };

  return (
    <>
      <AddCountry onAddCountry={handleAddNewCountry} />
      <CountryList
        countries={countries.countries}
        onChangeCountry={handleChangeCountryName}
        onDeleteCountry={handleDeleteCountry}
      />
    </>
  );
};
