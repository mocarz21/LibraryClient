import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export const Book = (props) =>{

const handlExit = () =>{
  props.onClose()
}



  return(
    <>
      <DialogTitle>Podgląd Książki</DialogTitle>
      <DialogContent>

      </DialogContent>
      <DialogActions>
        <Button onClick={handlExit}>Zamknij</Button>
      </DialogActions>
    </>
  )

}