// src/App.js  
import React from 'react';  
import Navbar from './components/Navbar';  
import BookContextProvider from './contexts/BookContext';  
import BookList from './components/BookList';  
import NewBookForm from './components/NewBookForm';  
import { ThemeProvider } from './contexts/ThemeContext';  
import './index.css'; // Add this line if you have styles for light and dark themes  

function App() {  
  return (  
    <div className="App">  
      <ThemeProvider>  
        <BookContextProvider>  
          <Navbar />  
          <BookList />  
          <NewBookForm />  
        </BookContextProvider>  
      </ThemeProvider>  
    </div>  
  );  
}  

export default App;