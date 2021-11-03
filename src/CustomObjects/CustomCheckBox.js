import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//https://en.wikipedia.org/wiki/List_of_popular_music_genres
const musicGenreList = [
  'Blues',
  'Country',
  'Electronic',
  'House',
  'Flamenco',
  'Folk',
  'Hip hop',
  'Jazz',
  'Latin',
  'Pop',
  'R&B and soul',
  'Rock'
];

const CustomMultipleSelectCheckmarks = (props) => {
  const [musicGenreName, setMusicGenreName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMusicGenreName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    props.onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 500 }}>
        <InputLabel id="demo-multiple-checkbox-label">Favorite Music Types</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={musicGenreName}
          onChange={handleChange}
          input={<OutlinedInput label="Favorite Music Types" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {musicGenreList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={musicGenreName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomMultipleSelectCheckmarks;