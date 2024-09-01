/* eslint-disable react/prop-types */
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function TitleDialog({
  open,
  onClose,
  setTitle,
  handleDiaglogButton,
  text,
  buttonText
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth='xs'
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-Create Feedback Form'>{text}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin='dense'
          id='name'
          type='text'
          fullWidth
          variant='standard'
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            console.log('dialogbox');
            handleDiaglogButton();
          }}
        >
          {buttonText}
        </Button>
        <Button onClick={onClose} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
