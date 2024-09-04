/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Drawer,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Toolbar
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../context/FormContext';
const drawerWidth = 310;

const FieldDrawer = ({
  form,
  formId,
  fieldId,
  setIsFieldActive,
  fieldType,
  setOpenFieldDrawer
}) => {
  const [inputText, setInputText] = useState({
    label: '',
    required: false,
    errorMessage: ''
  });

  const [radioInput, setRadioInput] = useState(['', '', '']);

  const { updateFieldInForm } = useContext(FormContext);
  // console.log(form);
  const currentField = form.fields.find((field) => field.id === fieldId);
  // console.log({ currentField });

  useEffect(() => {
    if (currentField) {
      setInputText({
        label: currentField.label || '',
        required: currentField.required || false,
        errorMessage: currentField.errorMessage || ''
      });

      if (fieldType === 'radio' || fieldType === 'category') {
        setRadioInput(currentField.options || ['', '', '']);
      }
    }
  }, [currentField, fieldType]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setInputText((prevInput) => ({ ...prevInput, [name]: inputValue }));
  };

  const handleRadioInputChange = (index, value) => {
    setRadioInput((prevInput) => {
      const updatedInput = [...prevInput];
      updatedInput[index] = value;
      return updatedInput;
    });
  };

  const handleSave = () => {
    if (inputText.label !== '') {
      const updatedField = { ...inputText };

      if (fieldType === 'radio' || fieldType === 'category') {
        updatedField.options = radioInput;
      }

      updateFieldInForm(formId, currentField.id, updatedField);
    } else {
      alert('Label is empty');
    }
  };

  // console.log(radioInput);
  return (
    <Drawer
      // open={openFieldDrawer}
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
      <Box
        sx={{
          p: '20px 20px 0px 25px'
        }}
      >
        <Button
          color='secondary'
          size='small'
          sx={{ textTransform: 'none', mb: 3 }}
          startIcon={<ArrowBackIosIcon />}
          onClick={() => {
            setIsFieldActive(false);
            setOpenFieldDrawer(false);
          }}
        >
          Back to Add Fields
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            id='filled-helperText'
            name='label'
            label='Label'
            placeholder='Heading for your text area'
            value={inputText.label}
            onChange={handleInputChange}
            variant='standard'
            fullWidth
            InputProps={{
              sx: { fontSize: '14px' }
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  size='small '
                  name='required'
                  checked={inputText.required}
                  onChange={handleInputChange}
                />
              }
              label='Required'
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '12px'
                }
              }}
            />
          </FormGroup>
          <TextField
            id='filled-helperText'
            label='Error message'
            name='errorMessage'
            placeholder='Write your error message here'
            value={inputText.errorMessage}
            onChange={handleInputChange}
            variant='standard'
            fullWidth
            InputProps={{
              sx: { fontSize: '14px' }
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, my: 3 }}>
          {(fieldType === 'radio' || fieldType === 'category') && (
            <>
              {radioInput.map((option, index) => (
                <TextField
                  key={index}
                  id={`standard-basic-${index}`}
                  label={`Option ${index + 1}`}
                  placeholder={`${
                    fieldType === 'radio' ? 'Radio' : 'Category'
                  } ${index + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleRadioInputChange(index, e.target.value)
                  }
                  variant='standard'
                  InputProps={{
                    sx: { fontSize: '14px' }
                  }}
                />
              ))}
            </>
          )}
        </Box>
        <Stack spacing={2} direction='row'>
          <Button
            variant='contained'
            color='info'
            onClick={() => {
              handleSave();
              setIsFieldActive(false);
              setOpenFieldDrawer(false);
            }}
          >
            Save
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => {
              setIsFieldActive(false);
              setOpenFieldDrawer(false);
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default FieldDrawer;
