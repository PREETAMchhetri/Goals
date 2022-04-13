import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Container className='text-center'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>

        </Container>
      </Router>
    </>
  );
}

export default App;
