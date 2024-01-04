import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Form from './Component/Form';


function App() {
  return (
   < Router>
      <Routes>
         <Route 
         path='/'
         element={<Navigate to="/submit-form" />} />
         
        <Route 
        path='/submit-form' 
        element={<Form/>}
        />
      </Routes>
   </Router>
  );
}

export default App;
