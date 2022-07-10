import style from './TestList.module.scss'
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Input = styled('input')({
  display: 'none',
});


const TestList = (props: any) => {
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>Test area</div>
        <Button variant="contained" onClick={() => { alert('hi') }}>Hello World</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="/profile">Link</Button>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default TestList

/*

const options = ['Option 1', 'Option 2'];

function Tst() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}
function ComboBox() {
  const defaultFilm = { label: '', year: '' }
  const [film, setFilm] = useState(defaultFilm)
  let setter = (option: any, value: any) => { value ? setFilm(value) : setFilm(defaultFilm) }
  return (
    <div>
      <Autocomplete
        onChange={setter}
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <div>You choose film: {film.label} year: {film.year}</div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];

function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
  let call = (func: any, value: any) => { console.log(value) }
  return (
    <Stack spacing={2} sx={{ width: 1 / 3, m: '0 auto' }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        onChange={call}
        renderInput={(params) => (
          <TextField {...params} label="disableCloseOnSelect" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="clearOnEscape" variant="standard" />
        )}
      />

      <Autocomplete
        {...flatProps}
        id="readOnly"
        readOnly
        defaultValue={flatProps.options[13]}
        renderInput={(params) => (
          <TextField {...params} label="readOnly" variant="standard" />
        )}
      />
    </Stack>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
];
*/