import React from 'react'

export default function Page() {
  return (
    <div style={{backgroundColor: '#fff', maxWidth: "850px" , padding : '20px' ,
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius : "12px" , fontSize : "13px"}}>
      <h6 className='ms-3 '>Request Help</h6>
      <p className='ms-3 mb-5'>We are at your service and always strive to improve services.</p>

      <div className='d-flex flex-wrap gap-3 ms-3'>
        <p className='border p-2 rounded-pill '> <b>  Unite Arab Emirates and other countries </b> +971 50 2008 155 </p> 
        <p className='border p-2 rounded-pill'> <b> Qatar </b> +974 5555 8378</p> 
        <p className='border p-2 rounded-pill'> <b>  Arab Republic of Egypt </b> +20 155 183 5017</p>
        <p className='border p-2 rounded-pill'><b> Email </b> sales@lawsurface.com </p>
      </div>
    </div>
  )
}
