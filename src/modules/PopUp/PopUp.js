import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Login } from "./Login/Login"
import { User } from './User/User'
import { Book } from './Book/Book'
import { UserId } from './UserId/UserId'
import { Statute } from './Statute/Statute'
import { BorrowedBookInfo } from './BorrowedBookInfo/BorrowedBookInfo';
import { PasswordChange } from './PasswordChange/PasswordChange';

export default function FormDialog(props) {

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose}>
        { props.use === "logIn" && <Login onClose={ props.onClose }/> }
        { props.use === "user" && <User  onClose= { props.onClose }/> } 
        { props.use === "book" && <Book  onClose= { props.onClose } bookId={props.bookId}/> }
        { props.use === "userId" && <UserId  onClose= { props.onClose } userId={props.userId}/> }
        { props.use === "statute" && <Statute onClose= { props.onClose }/> }
        { props.use === "borrowed" && <BorrowedBookInfo onClose= { props.onClose } info = { props.book }/> }
        { props.use === "passwordChange" && <PasswordChange onClose= { props.onClose } userId = { props.userId }/> }
      </Dialog>
    </div>
  );
}