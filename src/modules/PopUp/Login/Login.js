import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Login = (props) =>{

  return(
    <>
      <DialogTitle>Zaloguj</DialogTitle>
      <DialogContent>
        <DialogContentText>
          W celu zalogowania podaj login i hasło 
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Login"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Hasło"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Zaloguj</Button>
      </DialogActions>
    </>
  )

}