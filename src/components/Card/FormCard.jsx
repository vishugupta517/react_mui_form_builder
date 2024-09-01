/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import formCardImg from '../../assets/images/formCardImg.png';
import CustomButton from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const FormCard = ({ form }) => {
  // console.log(form);
  const { title, id } = form;
  const navigate = useNavigate();

  const handleEditForm = () => {
    navigate(`/dashboard/form/${title.replace(/ /g, '-')}/${id}`);
  };
  return (
    <Card
      sx={{
        width: 306,
        height: 379,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#F5D563',
          height: 68,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={formCardImg} alt='feedback-form' />
      </Box>
      <CardContent>
        <Typography sx={{ fontSize: '20px', padding: '10px 0' }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            paddingBottom: '2.1rem'
          }}
        >
          <Stack
            direction='row'
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <Typography sx={{ fontSize: '13px' }}> Submitted</Typography>
            <Typography sx={{ fontSize: '13px' }}>10</Typography>
          </Stack>
          <Stack
            direction='row'
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <Typography sx={{ fontSize: '13px' }}> Viewed</Typography>
            <Typography sx={{ fontSize: '13px' }}>55</Typography>
          </Stack>
          <Stack
            direction='row'
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <Typography sx={{ fontSize: '13px' }}> Date Published</Typography>
            <Typography sx={{ fontSize: '13px' }}>08/07/2024</Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <CustomButton
            color='secondary'
            variant='contained'
            w={183}
            h={42}
            text='VIEW SUBMISSIONS'
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            <CustomButton
              color='success'
              variant='contained'
              w={77}
              text='EDIT'
              onClick={() => handleEditForm()}
            />

            <CustomButton
              color='primary'
              variant='contained'
              w={99}
              text='DELETE'
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FormCard;
