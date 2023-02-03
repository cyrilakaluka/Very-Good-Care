import SEO from "@/components/SEO"
import Image from 'next/image'
import Link from 'next/link'
import Button from "@/components/Button"
import Radio from "@/components/Radio"
import React, { useState, useEffect } from "react"
import { AiOutlineArrowDown } from 'react-icons/ai'


export default function Home() {
  const [helpViewSelection, setHelpViewSelection] = useState(1)

  const handleClick = (btnNumber: 1 | 2) => {
    setHelpViewSelection(btnNumber)
  }

  const services = [
    'domiciliary care',
    'hospital discharge',
    'domestic support',
    'personal home care',
    'escort service',
    'befriending service'
  ]

  return (
    <>
      <SEO pageTitle="VeryGoodCare | We love to care." pageDescription="Very Good Care Healthcare Services" />
      <div className="relative w-screen h-screen flex items-center overflow-hidden">
        <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-564 px-4 lg:pl-32 md:pr-0 z-10">
          <div className="relative w-12 h-12 md:w-16 md:h-16"><Image fill alt="Logo" src='/logo.svg' /></div>
          <div className="inline text-4xl md:text-5xl font-extrabold">
            We offer &ndash;
            {
              services.map((service, index) => (
                <span key={index} className="pl-2 pt-12 -translate-y-12 inline absolute overflow-hidden">
                  <div className="opacity-0 capitalize animate-[topToBottom_linear_infinite]" style={{ animationDuration: `${services.length * 2.5}s`, animationDelay: `${index * 2.5}s` }}>{service}</div>
                </span>
              ))
            }
          </div>
          {/* <div className="text-4xl md:text-5xl font-extrabold">We love to care.</div> */}
          <div className="font-bold text-xl md:text-2xl">How can we help you today?</div>
          <div className="mt-4 flex gap-6">
            {
              [
                'ARRANGE CARE',
                "I'M A PROFESSIONAL"
              ].map((title, index) => (
                <button key={index} className={`font-extrabold text-lg sm:text-xl border-b-[3px] border-transparent ${helpViewSelection === (index + 1) ? 'btn-active' : 'btn-default'}`} onClick={() => handleClick((index + 1) as (1 | 2))}>{title}</button>
              ))
            }
          </div>
          <div className="h-[20vh]">
            <div className={`${helpViewSelection === 1 ? 'flex' : 'hidden'} flex-col items-start gap-4`}>
              <div className="text-xl">Who is the care for?</div>
              <Radio id="arrange-care-option-1" name="arrange-care" label="Myself" checked />
              <Radio id="arrange-care-option-2" name="arrange-care" label="Someone I know" />
              <Button text="Proceed" className="py-3 px-16 text-lg" />
            </div>
            <div className={`${helpViewSelection === 2 ? 'flex' : 'hidden'} flex-col items-start gap-4`}>
              <div className="text-2xl md:text-3xl font-bold">Become a VeryGoodCare professional.</div>
              <div className="text-gray-700">Sign up to get started.</div>
              <Link href='/pro'><Button text="Get started" className="py-3 px-14 text-lg" /></Link>
            </div>
          </div>
        </div>
        <div className="hidden absolute -z-1 right-0 top-20 w-1/2 pt-4 flex-col items-end hero-xl:flex">
          <Image src='/hero-image-1.webp' alt="Hero Image" width={2560} height={1920} />
        </div>
        <div className="hidden absolute -z-1 right-0 top-20 w-[42.5%] pt-4 flex-col items-end hero-lg:flex">
          <Image src='/hero-image-2.webp' alt="Hero Image" width={2560} height={1920} />
        </div>
        <div className="hidden absolute -z-1 right-0 top-20 h-full w-[40vh] pt-4 flex-col items-end hero-md:flex">
          <Image src='/hero-image-3.webp' alt="Hero Image" width={2560} height={1920} />
        </div>
        <div className="hidden absolute -z-1 right-0 top-[57px] w-[38vw] transform -scale-y-100 flex-col items-end hero-sm:flex">
          <Image src='/hero-image-4.webp' alt="Hero Image" width={2560} height={1920} />
        </div>
        <div className="hidden absolute -z-1 right-0 bottom-0 w-[38vw] flex-col items-end hero-sm:flex">
          <Image src='/hero-image-4.webp' alt="Hero Image" width={2560} height={1920} />
        </div>
        <button className="absolute left-1/2 bottom-4 -translate-x-1/2 animate-bounce rounded-full shadow-xl">
          <AiOutlineArrowDown className="sm:w-12 sm:h-12 w-10 h-10" />
        </button>
      </div>
    </>
  )
}