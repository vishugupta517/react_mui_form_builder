import { Button } from '@mui/material';

/* eslint-disable react/prop-types */
const CustomButton = ({ color, variant, w, h = 42, text, onClick }) => {
  return (
    <Button
      sx={{ height: h, width: w, padding: '22px 8px ', fontSize: '15px' }}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
