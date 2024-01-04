

import React, { useState } from 'react';
import './form.css';
// import { useNavigate } from 'react-router-dom';
import Submitted from './submitted';

function Form() {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  // const navigate = useNavigate();

  const handleIssueChange = async (event) => {
    setSelectedIssue(event.target.value);
  };


    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
    try {
      const formData = {
        name: document.getElementById('name').value,
        supplier: document.getElementById('supplier').value,
        issue: document.querySelector('input[name="issue"]:checked').value,
        productionOrderId: document.getElementById('productionOrderId').value,
        fileUpload: document.getElementById('fileUpload').value,
        textArea: selectedIssue === 'other' ? document.getElementById('textArea').value : '',
      };

      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(formData);

      const result = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully!');

       
            
          setSubmittedData(formData);

        setTimeout(() => {
          window.location.href = '/result';
        }, 0);

      
       
        // window.location.href = '/result';
        // navigate('/result');
     
      } else {
        console.error('Form submission failed:', result.message);
      
      }
    } catch (error) {
      console.error('Error creating form:', error.message);
    }
  };

  return (
     
    <div className='Container'>
      {submittedData ? (
        <Submitted submittedData={submittedData}/>
      ) : (
       <form onSubmit={handleFormSubmit}>
          <h1> SubContract Production Order Issue Tracker</h1>
          <h3> Collect information on issues with Subcontract Production Order and Supplier QAD usage.</h3>
             <div className='form-group'>
               <label htmlFor='name'>Enter your name:</label>
               <input type='text' id='name' name='name' />
             </div>
    
             <div className='form-group'>
               <label htmlFor='supplier'>Supplier:</label>
               <select id='supplier' name='supplier'>
                 <option value='Curtis'>Curtis</option>
                 <option value='supplier2'>Supplier 2</option>
               </select>
             </div>
    
             <div className='form-group'>
               <div className='form-group'>
                 <label>Issue:</label>
                 <div className='radio-group'>
                   <div>
                     <input
                      type='radio'
                      id='missingMaterial'
                      name='issue'
                      value='missingMaterial'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='missingMaterial'>Missing Material</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='wrongTubCount'
                      name='issue'
                      value='wrongTubCount'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='wrongTubCount'>Wrong Tub Count</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='wrongWeight'
                      name='issue'
                      value='wrongWeight'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='wrongWeight'>Wrong Weight on Subcontract Production Order</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='unableToSubmit'
                      name='issue'
                      value='unableToSubmit'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='unableToSubmit'>Unable to Submit Receipt in Portal</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='other'
                      name='issue'
                      value='other'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='other'>Other</label>
                  </div>
    
                  {selectedIssue === 'other' && (
                    <div className='comment-section'>
                      <label htmlFor='comment'>Comments:</label>
                      <textarea id='textArea' name='TextArea' rows='4' cols='50'></textarea>
                    </div>
                  )}
                </div>
              </div>
            </div>
    
            <div className='form-group'>
              <label htmlFor='productionOrderId'>Subcontract Production Order ID:</label>
              <input type='text' id='productionOrderId' name='productionOrderId' />
            </div>
    
            <div className='form-group'>
              <label htmlFor='fileUpload'>Upload documents showing the issue (BOL or Subcontract Production Order):</label>
              <div>
                <input type='file' id='fileUpload' name='fileUpload' />
              </div>
            </div>
    
            <div className='form-group'>
              <button type='submit' >Submit</button>
            </div>
          </form>
          )}
        </div>
  
  
    )}

export default Form;
