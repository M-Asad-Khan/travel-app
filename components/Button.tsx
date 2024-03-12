import { ButtonProps } from '@/helper/index';
import Image from '@/node_modules/next/image';
import React from 'react'


const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    
    </button>
  )
}

export default Button