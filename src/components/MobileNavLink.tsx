import Link from 'next/link'
import React, { ComponentType } from 'react'

type IconProps = {
  size?: number | string
  color?: string
  className?: string
}

type LinkProps = {
  url: string
  title: string
  Icon: ComponentType<IconProps>
}

const MobileNavLink = ({ url, title, Icon }: LinkProps) => {
  return (
    <Link href={url}>
      <div className='flex flex-row gap-6 items-center justify-start'>
        <Icon size={32} className='text-app-green' />
        <span className='text-base uppercase hover:text-app-green font-bold'>{title}</span>
      </div>
    </Link>
  )
}

export default MobileNavLink