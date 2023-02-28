import React from "react";
import { render ,useParams } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";



import './App.css';
import Header from './components/Header'
import NotesListPages from './pages/NotesListPages'
import NotePage from './pages/NotePage'
function App() {
  return(
    <HashRouter>
        <div className="container dark">
        <div className="app">
        <Header />
        <Routes>
            <Route path="/"  element={<NotesListPages/>}></Route>
            <Route path = "/note/:id" element ={<NotePage/>}></Route>
        </Routes>
        </div>
        </div>
    </HashRouter>
  );
}

export default App;
