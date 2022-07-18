import React from 'react'
import {ProfilePicture} from '../../assets/images';
import './Register.css'

const Register = () => {
  return (
    <div>
      <img src={ProfilePicture} alt="PotoProfil" className='w-4/6 h-screen'/>
      <div className='container absolute right-0 top-16 w-9/12 h-screen flex flex-col'>
        <div className='w-2/3 h-full flex flex-col justify-center sm:w-full sm:pr-28'>
          <form action="">
            <input type="email" placeholder='EMAIL' className='block w-full py-3 pl-5 bg-zinc-800 hover:bg-zinc-900 focus:bg-zinc-900 border border-solid border-slate-50 rounded text-slate-400 sm:w-2/5 sm:py-4 sm:pl-7 sm:text-xl sm:ml-auto'/>
            <input type="password" placeholder='PASSWORD' className='block w-full py-3 pl-5 mt-1 bg-zinc-800 hover:bg-zinc-900 focus:bg-zinc-900 border border-solid border-slate-50 rounded text-slate-400 sm:w-2/5 sm:py-4 sm:pl-7 sm:mt-5 sm:text-xl sm:ml-auto'/>
            <button className='block w-full h-12 mt-4 bg-red-600 hover:bg-red-700 rounded text-white sm:w-2/5 sm:h-14 sm:mt-12 sm:ml-auto'>R E G I S T E R</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;