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
const drawerWidth = 310;

const labels = [
  {
    type: 'multiline',
    label: 'Heading for your  text area'
  },
  {
    type: 'numberRating',
    label: 'Heading for your  number rating'
  },
  {
    type: 'starRating',
    label: 'Heading for your  star rating'
  },
  {
    type: 'smileyRating',
    label: 'Heading for your  smiley rating'
  },
  {
    type: 'outlined',
    label: 'Single line input'
  },
  { type: 'radio', label: 'Heading for your category options' },
  {
    type: 'category',
    label: 'Heading for your category buttons'
  }
];
const FieldDrawer = ({ setIsFieldActive, fieldType }) => {
  const fieldLabel = labels.find((field) => field.type === fieldType);
  return (
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
          }}
        >
          Back to Add Fields
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            id='filled-helperText'
            label='Label'
            defaultValue={`${fieldLabel.label}`}
            variant='standard'
            fullWidth
            InputProps={{
              sx: { fontSize: '14px' } // Change the font size for the input text
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch size='small' />}
              label='Required'
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '12px' // Change the font size for the label
                }
              }}
            />
          </FormGroup>
          <TextField
            id='filled-helperText'
            label='Error message'
            defaultValue='Write you error message'
            variant='standard'
            fullWidth
            InputProps={{
              sx: { fontSize: '14px' } // Change the font size for the input text
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, my: 3 }}>
          {fieldType && fieldType === 'radio' ? (
            <>
              <TextField
                id='standard-basic'
                label='Options'
                defaultValue='Radio 1'
                variant='standard'
                InputProps={{
                  sx: { fontSize: '14px' } // Change the font size for the input text
                }}
              />
              <TextField
                id='standard-basic'
                defaultValue='Radio 2'
                variant='standard'
                InputProps={{
                  sx: { fontSize: '14px' } // Change the font size for the input text
                }}
              />
              <TextField
                id='standard-basic'
                defaultValue='Radio 3'
                variant='standard'
                InputProps={{
                  sx: { fontSize: '14px' } // Change the font size for the input text
                }}
              />
            </>
          ) : fieldType === 'category' ? (
            <>
              <TextField
                id='standard-basic'
                label='Options'
                defaultValue='category 1'
                variant='standard'
                InputProps={{
                  sx: { fontSize: '14px' } // Change the font size for the input text
                }}
              />
              <TextField
                id='standard-basic'
                defaultValue='category 2'
                variant='standard'
                InputProps={{
                  sx: { fontSize: '14px' } // Change the font size for the input text
                }}
              />
              <TextField
                id='standard-basic'
                defaultValue='category 3'
                variant='standard'
                InputProps={{
                  sx: { fontSize: '14px' } // Change the font size for the input text
                }}
              />
            </>
          ) : fieldType === 'starRating' ? (
            <Box></Box>
          ) : fieldType === 'smileyRating' ? (
            <Box></Box>
          ) : fieldType === 'numberRating' ? (
            <Box></Box>
          ) : null}
        </Box>
        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='info'>
            Save
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => {
              setIsFieldActive(false);
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
