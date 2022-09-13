import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-dark container-fluid g-0 contain position-relative'>
        {children}
    </div>
  )
}

export default Layout