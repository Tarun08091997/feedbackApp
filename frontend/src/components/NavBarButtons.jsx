import React from 'react'

export default function NavBarButtons({name , set}) {
  return (
    <div className='cursor-pointer' onClick={
        () => set(name)
    }>
        {name}{" Suggestion"}
    </div>
  )
}
