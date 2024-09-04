/* eslint-disable react/prop-types */
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';

export const MultilineInput = () => {
  return (
    <TextField
      id='outlined-multiline-static'
      multiline
      rows={2}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#DBD6D6'
          }
        }
      }}
    />
  );
};

export const NumberRating = () => {
  return (
    <ToggleButtonGroup exclusive size='small' fullWidth>
      {[...Array(10)].map((_, index) => (
        <ToggleButton key={index + 1} value={index + 1}>
          {index + 1}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export const StarRating = () => {
  return (
    <Rating
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
      name='star-rating'
      size='large'
    />
  );
};

export const SmileyRating = () => {
  const customIcons = {
    1: <SentimentVeryDissatisfiedIcon style={{ fontSize: '40' }} />,
    2: <SentimentDissatisfiedIcon style={{ fontSize: '40' }} />,
    3: <SentimentSatisfiedIcon style={{ fontSize: '40' }} />,
    4: <SentimentSatisfiedAltIcon style={{ fontSize: '40' }} />,
    5: <SentimentVerySatisfiedIcon style={{ fontSize: '40' }} />
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value]}</span>;
  }

  return (
    <Rating
      name='smiley-rating'
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
      size='large'
    />
  );
};

export const SingleLineInput = () => {
  return (
    <TextField
      id='singleLineInput'
      variant='outlined'
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#DBD6D6'
          }
        }
      }}
    />
  );
};

export const CategoryInput = ({ field }) => {
  return (
    <ToggleButtonGroup exclusive size='small' fullWidth>
      {field.options.map((option, index) => (
        <ToggleButton key={index + 1} value={option}>
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export const RadioInput = ({ field }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        {field.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio size='small' />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
