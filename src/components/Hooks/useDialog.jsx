import { useState } from 'react';

const useDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formTitle, setTitle] = useState('');

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return {
    dialogOpen,
    formTitle,
    setTitle,
    handleDialogOpen,
    handleDialogClose
  };
};

export default useDialog;
