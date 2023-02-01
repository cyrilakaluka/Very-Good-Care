import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdMenu } from 'react-icons/io'
import { FaHandHoldingMedical } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'
import { HiHomeModern } from 'react-icons/hi2'
import { BsPersonPlusFill, BsInfoCircleFill } from 'react-icons/bs'
import Button from './Button'
import MobileNavLink from './MobileNavLink'
import { IconType } from 'react-icons'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navigation = [
    ['Home', '/', HiHomeModern],
    ['Our Services', '/services', FaHandHoldingMedical],
    ['About', '/about', BsInfoCircleFill],
    ['Contact Us', '/contact', ImPhone],
    ['Join as a pro', '/pro', BsPersonPlusFill]
  ]

  return (
    <>
      <div className='fixed left-0 top-0 w-full z-50 ease-in duration-300 border-b border-b-gray-200'>
        <div className='m-auto flex justify-between items-center px-4 py-1'>
          <Link href='/'>
            <Image
              src='/logo-with-name.svg'
              width={333}
              height={55}
              alt='Logo'
              className='hidden lg:block'
            />
            {/* Mobile Logo */}
            <Image
              src='/logo.svg'
              width={48}
              height={48}
              alt='Logo'
              className='lg:hidden'
            />
          </Link>
          <ul className='hidden sm:flex items-center'>
            {navigation.map(([title, url], index) => {
              if (index !== navigation.length - 1) {
                return <li className='mr-8' key={index}><Link href={url as string}>{title as string}</Link></li>
              } else {
                return <li key={index}><Link href={url as string}><Button text={title as string} className='py-2 px-4' /></Link></li>
              }
            })}
          </ul>

          {/* Overlay */}
          <div onClick={handleNav} className={`${nav ? 'opacity-100 z-[99999] translate-x-0 translate-y-0' : 'opacity-0 -z-[99999] translate-x-full translate-y-0'} fixed w-screen h-screen top-0 left-0 right-0 bottom-0 transition-opacity ease-in-out duration-300`}>
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-[#223443] opacity-60'></div>
          </div>

          {/* Open Mobile Menu Button */}
          <button onClick={handleNav} className='block sm:hidden z-10 p-1 hover:bg-black/10'><IoMdMenu size={32} /></button>
          {/* Mobile Menu */}
          <div
            className={`${nav ? 'translate-x-0 translate-y-0' : 'translate-x-full translate-y-0'} sm:hidden fixed top-0 bottom-0 right-0 w-screen h-screen max-w-[320px] py-12 flex items-center shadow-lg z-[999999] bg-white overflow-hidden transition-transform ease-in-out duration-300`}
          >
            <button onClick={handleNav} className='absolute top-4 right-4 p-1 hover:bg-black/10'><AiOutlineClose size={32} /></button>
            <ul className='flex justify-start items-start flex-col h-full w-full pt-8'>
              {navigation.map(([title, url, icon], index) => (
                <li onClick={handleNav} key={index} className={`${index !== navigation.length - 1 ? 'border-b-2 border-b-slate-200/70' : 'mt-auto'} w-full py-6 px-4`}>
                  <MobileNavLink url={url as string} title={title as string} Icon={icon as IconType} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar