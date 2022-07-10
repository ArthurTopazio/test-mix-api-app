import style from './TestList.module.scss'
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react'
import Stack from '@mui/material/Stack'

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


const TestList = (props: any) => {
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>Test area</div>
        <Button variant="contained" onClick={() => { alert('hi') }}>Hello World</Button>
        <Playground />
      </div>
    </div>
  )
}

export default TestList

/*
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
];*/