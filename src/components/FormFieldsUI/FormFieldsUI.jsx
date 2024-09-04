/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
  CategoryInput,
  MultilineInput,
  NumberRating,
  RadioInput,
  SingleLineInput,
  SmileyRating,
  StarRating
} from './FormFieldsInput';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

/* eslint-disable react/prop-types */
const FormFieldsUI = ({ data, setOpenFieldDrawer, getCurrentFieldIdType }) => {
  // console.log(data);

  if (!data || !data.fields) {
    console.error('Data or fields are undefined.');
    return null;
  }

  return (
    <form>
      <Box
        sx={{
          p: 1.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}
      >
        {data.fields.map((field, index) => (
          <DynamicFormField
            key={index}
            field={field}
            setOpenFieldDrawer={setOpenFieldDrawer}
            getCurrentFieldIdType={getCurrentFieldIdType}
            formId={data.id}
          />
        ))}
      </Box>
    </form>
  );
};

const DynamicFormField = ({ formId, field, getCurrentFieldIdType }) => {
  const { label, required, type, errorMessage, id } = field;

  const { deleteFieldInForm } = useContext(FormContext);

  const handleEditClick = (id, type) => {
    getCurrentFieldIdType(id, type);
  };

  const handleFieldDelete = () => {
    deleteFieldInForm(formId, id);
  };

  const renderInput = () => {
    switch (type) {
      case 'multiline':
        return <MultilineInput />;
      case 'singleLine':
        return <SingleLineInput />;
      case 'radio':
        return <RadioInput field={field} />;
      case 'category':
        return <CategoryInput field={field} />;
      case 'smileyRating':
        return <SmileyRating />;
      case 'starRating':
        return <StarRating />;
      case 'numberRating':
        return <NumberRating />;
      default:
        return null;
    }
  };

  return (
    <Card
      sx={{
        width: '100%',
        p: 1,
        pt: 1.8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          p: 0,
          flexGrow: 1
        }}
      >
        <Typography variant='p' sx={{ fontSize: 14 }}>
          {` ${required ? label + ' *' : label}`}
        </Typography>
        {renderInput()}
      </CardContent>
      <Stack
        direction='row'
        spacing={1}
        sx={{ justifyContent: 'flex-end', mt: 1 }}
      >
        <IconButton size='small' onClick={() => handleEditClick(id, type)}>
          <ModeEditIcon />
        </IconButton>
        <IconButton size='small' onClick={() => handleFieldDelete()}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default FormFieldsUI;
