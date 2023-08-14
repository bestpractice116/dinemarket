import React, { FC } from 'react'

const Wrapper:FC<{children:any}> = ({children}) => {
  return (
    <div className='max-w-[1440px] mx-auto lg:px-24 md:px-24 px-8'>
        {children}
    </div>
  )
}

export default Wrapper