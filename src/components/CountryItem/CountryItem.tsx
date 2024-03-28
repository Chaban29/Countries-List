import { FC, useState } from 'react';
import { IInitialCountries } from '../mock/countries.mock';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

interface ICountryItemProps {
  country: IInitialCountries;
  onChange: (country: IInitialCountries) => void;
  onDelete: (countryId: number) => void;
}

type TypeIsEditing = boolean;

export const CountryItem: FC<ICountryItemProps> = ({
  country,
  onChange,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState<TypeIsEditing>(false);
  return (
    <div className='country__list--item'>
      <label htmlFor='check'>
        <Checkbox
          id='check'
          name='check'
          checked={country.done}
          onChange={(event) =>
            onChange({ ...country, done: event.target.checked })
          }
        />
      </label>
      {isEditing ? (
        <>
          <label htmlFor='save'>
            <TextField
              id='outlined-search'
              className='edit__country'
              label='Edit country'
              size='small'
              type='search'
              name='save'
              value={country.countryName}
              onChange={(event) =>
                onChange({ ...country, countryName: event.target.value })
              }
            />
          </label>
          <Button
            variant='outlined'
            type='button'
            id='save'
            onClick={() => setIsEditing(false)}
          >
            {' '}
            Save
          </Button>
        </>
      ) : (
        <>
          {country.countryName}
          <Button type='button' onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </>
      )}

      <Button
        variant='outlined'
        startIcon={<DeleteIcon />}
        type='button'
        id='delete'
        onClick={() => onDelete(country.id)}
      >
        Delete country
      </Button>
    </div>
  );
};
