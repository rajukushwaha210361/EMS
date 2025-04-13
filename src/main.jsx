import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AuthContext from './Context/AuthContext';
// import TaskContext from './Context/AuthContext';
import AuthProvider from './Context/AuthProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';

// localStorage.clear()
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    
   <AuthProvider>

    <App />
   </AuthProvider>
   
  // </React.StrictMode>
);
