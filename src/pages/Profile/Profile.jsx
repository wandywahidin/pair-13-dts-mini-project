import React from 'react'
import {CardProfilePicture} from '../../components';
import { ProfilePicture, ProfilePicture2, ProfilePicture3, ProfilePicture4, Logo } from '../../assets/images';
import {AddIcon} from '../../assets/icon';

const Profile = () => {
  return (
    <div className='flex h-screen bg-neutral-900 justify-center items-center px-10 sm:px-24'>
        <div className='flex flex-col justify-between items-center w-full'>
            <h2 className='text-slate-100 text-2xl sm:text-6xl'>Who's watching?</h2>
            <div className='flex justify-between w-full px-2'>
                <CardProfilePicture image={ProfilePicture2} name={"Murat"} />
                <CardProfilePicture image={ProfilePicture3} name={"Umut"}/>
                <CardProfilePicture image={ProfilePicture} name={"Kemal"}/>
                <CardProfilePicture image={ProfilePicture4} name={"Cocuk"}/>
                <CardProfilePicture image={AddIcon} name={"Other"} type={"Add"}/>
            </div>
            <button className='bg-transparent border py-1 px-3 border-slate-500 text-slate-500 text-xs hover:bg-neutral-800 sm:text-2xl'>MANAGE PROFILE</button>
        </div>
        <img src={Logo} alt='logo' className='absolute top-2 left-5 w-5 h-5 sm:top-2 sm:left-12 sm:w-24 sm:h-24' />
    </div>
  )
}

export default Profile;