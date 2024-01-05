

import React, { useEffect, useState } from 'react';

function Submitted({ submittedData }) {
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('submittedData'));
    setSavedData(dataFromLocalStorage);
  }, []);

  useEffect(() => {
    if (submittedData) {
     
    }
  }, [submittedData]);

  if (!savedData) {
    return <div>Form Submitted ....</div>;
  }

  return (
    <div className='container1'>
      <h1>Subcontract Order Issue form submitted !!!</h1>
      <div className='name'>
        <>
          <p>Name: {savedData.name} </p>
          <p>Supplier: {savedData.supplier} </p>
          <p>Issue: {savedData.issue} </p>
          <p>Subcontract Production Order ID: {savedData.productionOrderId} </p>
          <p>Document Uploaded: {savedData.fileUpload} </p>
        </>
      </div>
    </div>
  );
}

export default Submitted;
