import SEO from '@/components/SEO'
import React from 'react'

const about = () => {
  return (
    <div>
      <SEO pageTitle='About Us' pageDescription='Information about our company' />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tempora sapiente dicta, quos, eos illo, aperiam placeat dolores beatae quibusdam corrupti aliquid! Libero veritatis illo corporis, alias molestias eveniet dolorum?</p>
    </div>
  )
}

export default about

export async function getStaticProps() {
  return {
    props: {
      hideNavbar: false
    }
  }
}