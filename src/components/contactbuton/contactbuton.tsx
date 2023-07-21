"use client"
import React from 'react'
import  "./contactbuton.css";
import "./contactbuton.css"
import { useRouter } from 'next/navigation'

type Props = {}

const Contactbuton = (props: Props) => {
  const router = useRouter()

  return (
    <div className='contectdiv'>
      <button className='contect'   onClick={() => router.push('#ContectUs')}>Contact Us </button>
      </div>
  )
}

export default Contactbuton