import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { useState } from 'react';
import { usePas } from '../../../hooks/ApiHooks/usePas';

export const PasswordChange = (props) =>{
  console.log(props)
  const { save } = usePas()
  
  const [login, setLogin] = useState("");
  const [checkLogin, setCheckLogin] = useState("");
  const [validForm, setValidForm ] = useState(true)

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleChangePassword(event);
    }
  };

  const handleChangePassword = (e) =>{
    if(login === checkLogin ){
      save(props.userId,login)
      props.onClose()
    }else setValidForm(false)
  }

  return(
    <HotKeys handlers={{ ENTER: handleChangePassword }}>
      <DialogTitle>Zaloguj</DialogTitle>
      <DialogContent>
        {validForm && <DialogContentText >W celu zmiany hasła wpisz nowe hasło dwukrotnie </DialogContentText>}
        {!validForm && <DialogContentText className='login-error'>Hasła nie są identyczne</DialogContentText>}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Hasło"
          type="password"
          fullWidth
          variant="standard"
          value={login}
          onChange={e=> setLogin( e.target.value )}
        />
        <TextField
          margin="dense"
          id="password"
          label="powtórz hasło"
          type="password"
          fullWidth
          variant="standard"
          value={checkLogin}
          onChange={e=> setCheckLogin( e.target.value )}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleChangePassword(e);
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleChangePassword}>Zmień hasło</Button>
      </DialogActions>
    </HotKeys>
  )

}