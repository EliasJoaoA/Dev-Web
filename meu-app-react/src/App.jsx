import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList';
import UserForm from './pages/UserForm';
import './App.css'; // Arquivo de estilos

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserForm />} />
        {/* Rota opcional para edição */}
        {/* <Route path="/edit/:id" element={<UserForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;