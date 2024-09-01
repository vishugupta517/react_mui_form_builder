import { Box, Card, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FormDrawer from '../components/FormDrawer/FormDrawer';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../components/context/FormContext';
import FormFieldsUI from '../components/FormFieldsUI/FormFieldsUI';
import TitleDialog from '../components/Modals/TitleDialog';
import useDialog from '../components/Hooks/useDialog';

const CreateForm = () => {
  console.log('component mounted');
  const navigate = useNavigate();
  const { forms, updateForm } = useContext(FormContext);
  const { id } = useParams();
  const form = forms.find((f) => f.id === id);

  const {
    dialogOpen,
    formTitle,
    setTitle,
    handleDialogOpen,
    handleDialogClose
  } = useDialog();

  const handleUpdateTitle = () => {
    if (form) {
      const updatedForm = { ...form, title: formTitle };
      updateForm(form.id, updatedForm);

      // Update the URL with the new title
      const formattedTitle = formTitle.replace(/ /g, '-'); // Replace spaces with hyphens
      navigate(`/dashboard/form/${formattedTitle}/${form.id}`, {
        replace: true
      });

      handleDialogClose();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '160px',
          marginTop: 8
        }}
      >
        <Card
          sx={{
            marginTop: 5,
            width: '400px',
            minHeight: '550px'
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                justifyContent: 'flex-start',
                color: 'white',
                backgroundColor: '#5578F4'
              }}
            >
              <IconButton
                onClick={() => {
                  navigate('/dashboard');
                }}
              >
                <ArrowBackIosIcon sx={{ fontSize: '18px', color: 'white' }} />
              </IconButton>
              <Typography>{form?.title}</Typography>
              <IconButton
                onClick={() => {
                  handleDialogOpen();
                }}
              >
                <ModeEditIcon sx={{ fontSize: '18px', color: 'white' }} />
              </IconButton>
              <TitleDialog
                open={dialogOpen}
                onClose={handleDialogClose}
                setTitle={setTitle}
                handleDiaglogButton={handleUpdateTitle}
                text={'Update Title'}
                buttonText={'Update'}
              />
            </Box>
            <Box>{form ? <FormFieldsUI data={form} /> : null}</Box>
          </Box>
        </Card>
        <FormDrawer />
      </Box>
    </>
  );
};

export default CreateForm;
