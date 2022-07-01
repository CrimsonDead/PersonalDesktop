import { HeaderDumb } from './headerDumb'
import React from 'react'
import Link from 'next/link'

const MainPageHeader = () => {
  return (
        <div className='MainHeader'>
          {/* <a href='#'> */}
            <div className='headerComponent'>project logo</div>
          {/* </a> */}
          {HeaderDumb.map((headerTitle, index) => (
            <div key={index} className='headerComponent'>
              {/* <a href='#'> */}
                {headerTitle.title}
              {/* </a> */}
            </div>
          ))}
          <div className='headerComponent_LoginButton'>
            <Link href = "/loginPage">
              <button className='headerComponent' style={{ color: 'white', fontWeight: 'bold' }}>
                login button
              </button>
            </Link>
          </div>
        </div>
  )
}
export default MainPageHeader
