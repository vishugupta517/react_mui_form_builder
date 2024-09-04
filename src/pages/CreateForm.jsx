import { Box, Card, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FormDrawer from '../components/FormDrawer/FormDrawer';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../components/context/FormContext';
import FormFieldsUI from '../components/FormFieldsUI/FormFieldsUI';
import TitleDialog from '../components/Modals/TitleDialog';
import useDialog from '../components/Hooks/useDialog';
import { useNavbar } from '../components/context/NavbarContext';

const CreateForm = () => {
  const [currentFieldIdEditMode, setCurrentFieldIdEditMode] = useState(null);
  const [currentFieldTypeEditMode, setCurrentFieldTypeEditMode] = useState('');
  const [openFieldDrawer, setOpenFieldDrawer] = useState(false);
  const { setShowButtons } = useNavbar();
  const navigate = useNavigate();
  const { forms, updateForm } = useContext(FormContext);
  const { id } = useParams();
  const form = forms.find((f) => f.id === id);

  // console.log('formsArrays :', forms, 'currentForm:', form);

  const {
    dialogOpen,
    formTitle,
    setTitle,
    handleDialogOpen,
    handleDialogClose
  } = useDialog();

  useEffect(() => {
    setShowButtons(true);

    return () => setShowButtons(false);
  }, [setShowButtons]);

  const handleUpdateTitle = () => {
    if (form) {
      const updatedForm = { ...form, title: formTitle };
      updateForm(form.id, updatedForm);

      const formattedTitle = formTitle.replace(/ /g, '-'); // replacing spaces with hyphens
      navigate(`/dashboard/form/${formattedTitle}/${form.id}`, {
        replace: true
      });

      handleDialogClose();
    }
  };
  // console.log({ openFieldDrawer });
  const getCurrentFieldIdType = (fieldId, type) => {
    // console.log('EDIT FIELD ID', fieldId, type);
    setCurrentFieldIdEditMode(fieldId);
    setCurrentFieldTypeEditMode(type);
    setOpenFieldDrawer(true);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '160px',
          my: 8
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
            <Box>
              {form ? (
                <FormFieldsUI
                  data={form}
                  getCurrentFieldIdType={getCurrentFieldIdType}
                  setOpenFieldDrawer={setOpenFieldDrawer}
                />
              ) : null}
            </Box>
          </Box>
        </Card>
        <FormDrawer
          form={form}
          id={id}
          currentFieldIdEditMode={currentFieldIdEditMode}
          currentFieldTypeEditMode={currentFieldTypeEditMode}
          openFieldDrawer={openFieldDrawer}
          setOpenFieldDrawer={setOpenFieldDrawer}
          
        />
      </Box>
    </>
  );
};

export default CreateForm;
