import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {Login} from "./Login/Login"


export default function FormDialog(props) {

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose}>
        <Login props={props}/>
      </Dialog>
    </div>
  );
}