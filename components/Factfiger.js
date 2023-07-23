import React from 'react';
import Image from 'next/image';
import beans from '../public/beans.jpg'
 import {GrSpa,GrGrow, GrGroup,GrHomeRounded, GrLanguage} from "react-icons/gr";

export default function factfiger() {
  return (
    <div className='factAndFigurs'>       
        <div className='container'>
            <div className='row justify-content-center'>  
                <div className='crops col-sm-6 col-md-2'>
                    <div className='cropsinner'>
                       <GrSpa/>
                       <div className='countnum'>                
                              <span className='number'>40</span>
                        <span className='plusIcon'>+</span>
                        </div>
                        <span className='itemname'>Crops</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className='innerwrap cropsinner'>
                        <GrGrow/>
                        <div className='countnum'>
                        <span className='number2 number'>1000</span>
                        <span className='plusIcon'>+</span>
                        </div>
                        <span className='itemname'>VARIETIES</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className='cropsinner'>
                        <GrGroup/>
                        <span className='number3 number '>2200</span> 
                        <span className='itemname'>EMPLOYEES</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className='cropsinner'>
                        <GrHomeRounded/> 
                        <span className='number4 number'>30</span>
                        <span className='itemname'>COMPANIES</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className='cropsinner'>
                        <GrLanguage/> 
                        <div className='countnum'>
                        <span className='number5 number'>50 </span>
                        <span className='plusIcon'>+</span>
                        </div>                        
                        <span className='itemname'>COUNTRIES</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
