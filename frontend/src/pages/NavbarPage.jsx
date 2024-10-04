import React from 'react'
import NavBarButtons from '../components/NavBarButtons'

export default function NavbarPage({setPage}) {
  return (
    <div className='w-full bg-blue-600 h-[65px] flex items-center justify-end px-20 gap-[100px] text-white'>
        <NavBarButtons name={"See"}  set = {setPage}/>
        <NavBarButtons name={"Create"} set = {setPage}/>
    </div>
  )
}
