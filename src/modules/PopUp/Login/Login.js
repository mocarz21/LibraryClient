import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/ApiHooks/useUsers"


export const Login = (props) =>{

  const { logIn: logInHook } = useUser();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState(true)
  
  const handleLogin = async event => {
    event.preventDefault();
    const output = await logInHook(login, password);

    if (output && output.status === "success") {
      if(output.userData.cardNumber === undefined) {
        navigate('login/employee')
        props.onClose()
      } else {
        navigate('login/user')
        props.onClose()
      }
    } else {
      setValidForm(false);
    }
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin(event);
    }
  };

  return(
    <HotKeys handlers={{ ENTER: handleLogin }}>
      <DialogTitle>Zaloguj</DialogTitle>
      <DialogContent>
        {validForm && <DialogContentText >W celu zalogowania podaj login i hasło</DialogContentText>}
        {!validForm && <DialogContentText className='login-error'>Wprowadzono niepoprawne dane</DialogContentText>}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Login"
          type="text"
          fullWidth
          variant="standard"
          value={login}
          onChange={e=> setLogin( e.target.value )}
        />
        <TextField
          margin="dense"
          id="password"
          label="Hasło"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={e=> setPassword( e.target.value )}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogin(e);
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin}>Zaloguj</Button>
      </DialogActions>
    </HotKeys>
  )

}