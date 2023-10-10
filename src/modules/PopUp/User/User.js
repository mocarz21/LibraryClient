import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { UserForm } from '../../UserForm/UserForm'

export const User = (props) =>{

const handleEdit = () =>{
  
}



  return(
    <>
      <DialogTitle>Podgląd Czytelnika</DialogTitle>
      <DialogContent>
        <UserForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEdit}>Edytuj</Button>
      </DialogActions>
    </>
  )

}