/* eslint-disable react/prop-types */
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Switch,
  TextField
} from '@mui/material';
import FieldDrawer from './FieldDrawer';
import { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const drawerWidth = 310;

const fieldOptions = [
  { label: 'Textarea', icon: TextFieldsOutlinedIcon, type: 'multiline' },
  { label: 'Numeric rating', icon: PinOutlinedIcon, type: 'numberRating' },
  { label: 'Star rating', icon: StarBorderOutlinedIcon, type: 'starRating' },
  {
    label: 'Smiley rating',
    icon: SentimentSatisfiedOutlinedIcon,
    type: 'smileyRating'
  },
  { label: 'Single line input', icon: InputOutlinedIcon, type: 'outlined' },
  {
    label: 'Radio button',
    icon: RadioButtonCheckedOutlinedIcon,
    type: 'radio'
  },
  { label: 'Categories', icon: CategoryOutlinedIcon, type: 'category' }
];

function FieldItem({ label, Icon, type, handleFieldType }) {
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 0,
        pb: 0
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ListItemIcon sx={{ minWidth: 'auto', color: '#2B2B2B' }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={label} />
      </Box>
      <IconButton
        edge='end'
        aria-label='add'
        onClick={() => handleFieldType(type)}
      >
        <AddRoundedIcon color='primary' sx={{ fontSize: '28px' }} />
      </IconButton>
    </ListItem>
  );
}

function ConditionSwitch({ label, checked, onChange }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography sx={{ fontSize: 14, flexGrow: 1 }}>{label}</Typography>
      <Switch
        sx={{ ml: 0 }}
        onChange={onChange}
        checked={checked}
        inputProps={{ 'aria-labelledby': `switch-list-label-${label}` }}
      />
    </Box>
  );
}

export default function FormDrawer() {
  const [checkedConditions, setCheckedConditions] = useState([]);
  const [isFieldActive, setIsFieldActive] = useState(false);
  const [fieldType, setFieldType] = useState('');

  const handleToggle = (value) => () => {
    setCheckedConditions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleFieldType = (type) => {
    setFieldType(type);
    setIsFieldActive(true);
  };
  return isFieldActive ? (
    <FieldDrawer
      isFiledActive={isFieldActive}
      setIsFieldActive={setIsFieldActive}
      fieldType={fieldType}
    />
  ) : (
    <Drawer
      variant='permanent'
      anchor='right'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', p: 1 }}>
        <Typography sx={{ mt: 2, ml: 2 }} variant='h6' component='div'>
          Add fields
        </Typography>
        <List>
          {fieldOptions.map(({ label, icon: Icon, type }) => (
            <FieldItem
              key={label}
              label={label}
              Icon={Icon}
              type={type}
              handleFieldType={handleFieldType}
            />
          ))}
        </List>
        <Box sx={{ ml: 2.5, mt: 3, color: '#2B2B2B' }}>
          <ConditionSwitch
            label='Show based on URL conditions'
            checked={checkedConditions.includes('url')}
            onChange={handleToggle('url')}
          />
          <Box sx={{ pr: 1, mb: 3 }}>
            <TextField placeholder='http://' variant='standard' fullWidth />
          </Box>

          <ConditionSwitch
            label='Show on a specific date'
            checked={checkedConditions.includes('date')}
            onChange={handleToggle('date')}
          />
          <Box sx={{ pr: 1, mb: 3 }}>
            <TextField
              id='date'
              label='Start Date'
              type='date'
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Box>

          <ConditionSwitch
            label='Show on a specific time'
            checked={checkedConditions.includes('time')}
            onChange={handleToggle('time')}
          />
          <Box sx={{ pr: 1, mb: 3 }}>
            <TextField
              id='time'
              label='Select Time'
              type='time'
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
