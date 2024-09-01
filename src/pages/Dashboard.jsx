import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FormCard from '../components/Card/FormCard';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../components/context/FormContext';
import { v4 as uuidv4 } from 'uuid';
import TitleDialog from '../components/Modals/TitleDialog';
import useDialog from '../components/Hooks/useDialog';

const Dashboard = () => {
  const { forms, addForm } = useContext(FormContext);
  const navigate = useNavigate();
  const {
    dialogOpen,
    formTitle,
    setTitle,
    handleDialogOpen,
    handleDialogClose
  } = useDialog();

  const handleAddForm = () => {
    if (formTitle.trim()) {
      const newForm = {
        title: formTitle,
        fields: [],
        logic: [],
        id: uuidv4()
      };

      addForm(newForm);
      navigate(
        `/dashboard/form/${newForm.title.replace(/ /g, '-')}/${newForm.id}`
      );

      setTitle('');
      handleDialogClose();
    }
  };
  return (
    <Box
      component='main'
      sx={{ m: 4, display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 15 }}
    >
      <Card
        sx={{
          width: 306,
          height: 379,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CardContent>
          <Button
            onClick={() => {
              handleDialogOpen();
            }}
          >
            <AddRoundedIcon sx={{ fontSize: 91, color: '#2F4ED7', mb: 3 }} />
          </Button>
          <Typography component='div' variant='' sx={{ textAlign: 'center' }}>
            New form
          </Typography>
        </CardContent>
        <TitleDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          setTitle={setTitle}
          handleDiaglogButton={handleAddForm}
          text={'Create Feedback From'}
          buttonText={'Create'}
        />
      </Card>
      <Box component='div' sx={{ display: 'flex', gap: 2 }}>
        {forms.map((form) => (
          <FormCard
            key={form.id}
            form={form}
            handleAddForm={handleAddForm}
            setTitle={setTitle}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
