import { BrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import BooksProvider from './providers/BooksProvider'
import './App.css';
import UserProvider from './providers/UserProviders'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
        <BooksProvider>
          <Root/>
        </BooksProvider>
        </UserProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
