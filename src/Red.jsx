import React, { useEffect, useState } from 'react'

function Red() {
    let [hold, setHold] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setHold(json))
        .catch(err=>console.log("errrorrr"))
  
    })
  return (
    <div className=' h-[120vh] grid grid-cols-5 gap-3'>
    

        {
            hold ? 
            hold.map((ada)=>(
                <div className='bg-slate-700 text-white h-[250px]'>
                    <div className=' h-[150%] bg-[#db9d2b] text-[black] font-semibold font-mono grid justify-center items-center'>
                        {ada.name}
                        <p>{ada.username}</p>
                        <p>{ada.email}</p>
                        <p>{ada.phone}</p>
                        <p>{ada.company.name}</p>
                        <p>{ada.company.bs}</p>
                        <p>{ada.address.street}</p>
                        <p>{ada.address.suite}</p>
                        <p>{ada.address.city}</p>
                        <p>{ada.address.zipcode}</p>
                        <p>{ada.id}</p>
                        <p>{ada.website}</p>
                        <p>{ada.address.geo.lat}</p>
                        <p>{ada.address.geo.ing}</p>
                        
                    </div>
                </div>


            )) : <p>loadinggggggg.waitt</p>
        }
    </div>
  )
}

export default Red