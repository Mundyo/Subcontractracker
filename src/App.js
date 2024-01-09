import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Form from './Component/Form';
import Submitted from "./Component/submitted";


function App() {
  return (
   < Router>
      <Routes>
        <Route path='/' element={<Navigate to="/submit-form" />} />
         
        <Route  path='/submit-form' element={<Form/>}/>
        <Route  path='/result'      element={<Submitted/>} />
      </Routes>
   </Router>
  );
}

export default App;
