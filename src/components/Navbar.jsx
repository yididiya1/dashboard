import React,{useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppinCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bi';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import {Cart,Chat,Notification,UserProfile} from '.'
import { useStateContext } from '../contexts/ContextProvider';



const NavButton = ({title,customFunc,icon,color,dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}}
      className = 'relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span style={{background:dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  
  
  const {activeMenu, setActivemenu} = useStateContext()
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={()=>setActivemenu((prev) => !prev)}
      color="blue" icon={<AiOutlineMenu/>}      
      />
    </div>
  )
}

export default Navbar