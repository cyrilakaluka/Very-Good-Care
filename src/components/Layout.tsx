import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: any }) => {
    return (
        <div className='relative'>
            {!children.props.hideNavbar && <Navbar />}
            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout