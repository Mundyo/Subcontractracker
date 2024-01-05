
import './submitted.css';
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
      <h1>Subcontract Order Issue form submitted <img src = {process.env.PUBLIC_URL + '/done1.jpg'} alt= "" /> </h1>
      <div className='name'>
        <>
       
              <p>
                  <span className="document-label">Name:</span>
                  <span className="content">{savedData.name}</span>
              </p>
              <p>
                  <span className="document-label">Supplier:</span>
                  <span className="content">{savedData.supplier}</span>
              </p>
              <p>
                  <span className="document-label">Issue:</span>
                  <span className="content">{savedData.issue}</span>
              </p>
              <p>
                  <span className="document-label">Other Issue:</span>
                  <span className="content">{savedData.textArea}</span>
              </p>
              <p>
                  <span className="document-label">Subcontract Production Order ID:</span>
                  <span className="content">{savedData.productionOrderId}</span>
              </p>
              <p>
                  <span className="document-label">Document Uploaded:</span>
                  <span className="file-upload-content">{savedData.fileUpload}</span>
              </p>

        </>
      </div>
    </div>
  );
}

export default Submitted;
