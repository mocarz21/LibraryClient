import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Login } from "./Login/Login"
import { User } from './User/User'
import { Book } from './Book/Book'

export default function FormDialog(props) {

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose}>
        { props.use === "logIn" && <Login onClose={ props.onClose }/> }
        { props.use === "user" && <User  onClose= { props.onClose }/> } 
        { props.use === "book" && <Book  onClose= { props.onClose }/>}
      </Dialog>
    </div>
  );
}