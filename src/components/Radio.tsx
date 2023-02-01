import React from 'react'

const Radio = ({ id, name, label, checked }: { id: string; name: string; label: string; checked?: boolean }) => {
  return (
    <div className="flex items-center">
      <input type="radio" id={id} name={name} className="hidden" checked={checked} />
      <label htmlFor={id} className="flex items-center cursor-pointer text-xl"><span className="w-7 h-7 inline-block mr-2 rounded-full border-[3px] border-app-green shrink-0"></span>{label}</label>
    </div>
  )
}

export default Radio