import { BrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import BooksProvider from './providers/BooksProvider'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BooksProvider>
          <Root/>
        </BooksProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
