import * as React from 'react';
import { ChangeEvent, FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface IAddCountryProps {
  onAddCountry: (countryText: string) => void;
}

type TypeCountryName = string;
type TypeButtonDisabled = boolean;

export const AddCountry: FC<IAddCountryProps> = ({
  onAddCountry,
}: IAddCountryProps) => {
  const [countryText, setCountryText] = useState<TypeCountryName>('');
  const [isDisabled] = useState<TypeButtonDisabled>(false);

  const handleChangeCountryName = (event: ChangeEvent<HTMLInputElement>) => {
    setCountryText(event.target.value);
  };

  const handleAddNewCountry = () => {
    onAddCountry(countryText);
    setCountryText('');
  };

  return (
    <div className='field__container'>
      <label htmlFor='text'>
        <TextField
          id='outlined-basic'
          label='Add new country'
          variant='filled'
          type='text'
          name='text'
          value={countryText}
          onChange={handleChangeCountryName}
        />
      </label>
      <Button
        id='big__button'
        variant='contained'
        endIcon={<SendIcon />}
        type='button'
        onClick={handleAddNewCountry}
        disabled={countryText.length === 0 ? !isDisabled : isDisabled}
      >
        Add new country
      </Button>
    </div>
  );
};
