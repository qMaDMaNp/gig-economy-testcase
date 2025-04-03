import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Add as AddIcon } from '@mui/icons-material';

import { createBranch } from '../../../../../api/branches';

export default function BranchCreateDialog({ updateList }) {
  const [open, setOpen] = useState(false);
  // const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (isLoading) return;
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      await createBranch(formJson);

      // mock data
      // await createBranch({
      // name: 'ewpepw',
      // location: 'pewpew',
      // img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQTmMrYC8PemOy6CMBmYtlXarv4UjVUodkoBqC3A9pVKZIWOO4LyyiMUEwis3LWVypYC3j06QjU41bGUBP_yvxiPRZHv_70lBBaJI9MlA'
      // });

      updateList();
      handleClose();
    }
    catch (e) {
      // console.log(e.response.data.errors)
      // setErrors(e.response.data);
      throw (e);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleClickOpen} variant="outlined" startIcon={<AddIcon />}>
        New Branch
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: handleSubmit
          },
        }}
      >
        <DialogTitle>Create New Branch</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            error={false}
            helperText="Name of the branch"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="location"
            name="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            error={false}
            helperText="Location of the branch"
          />

          <TextField
            autoFocus
            margin="dense"
            id="img"
            name="img"
            label="Image"
            type="text"
            fullWidth
            variant="standard"
            error={false}
            helperText="Branch photo"
          />
        </DialogContent>

        <DialogActions>
          <Button color="default" onClick={handleClose}>Cancel</Button>
          <Button loading={isLoading} variant="contained" type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
