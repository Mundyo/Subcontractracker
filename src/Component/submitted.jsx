import React from 'react'

function submitted({ submittedData }) {
  return (
    <div className='container1'>
       <h1> Subcontract Order Issue form submitted !!! </h1>
    <div className='name'>
       <p>Name: {submittedData.name} </p>
       <p>Supplier: {submittedData.supplier} </p>
       <p>Issue:{submittedData.issue}  </p>
       <p>Subcontract Production Order ID:{submittedData.productionOrderId}  </p>
       <p>Document Uploaded:{submittedData.fileUpload}  </p>
    </div>
    </div>
  )
}

export default submitted
