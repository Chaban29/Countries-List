import { FC } from 'react';
import { IInitialCountries } from '../mock/countries.mock';
import { CountryItem } from '../CountryItem/CountryItem';

interface ICountryList {
  countries: IInitialCountries[];
  onChangeCountry: (country: IInitialCountries) => void;
  onDeleteCountry: (countryId: number) => void;
}

export const CountryList: FC<ICountryList> = ({
  countries,
  onChangeCountry,
  onDeleteCountry,
}: ICountryList) => {
  return (
    <>
      <ul className='country__list'>
        {countries.map((country) => (
          <li key={country.id}>
            <CountryItem
              country={country}
              onChange={onChangeCountry}
              onDelete={onDeleteCountry}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
