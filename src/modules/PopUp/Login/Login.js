import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = (props) =>{

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const whoLog = () =>{
    if(email === 'user' && password === 'user'){
      navigate('login/user')
      props.onClose()
    }
    if(email === 'admin' && password === 'admin'){
      navigate('login/employee')
      props.onClose() 
    }
  }

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
          value={email}
          onChange={e=> setEmail( e.target.value )}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Hasło"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={e=> setPassword( e.target.value )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={whoLog}>Zaloguj</Button>
      </DialogActions>
    </>
  )

}