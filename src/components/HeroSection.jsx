import { div } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom';

import HeroImage from '../assets/images/Asset 3.png';
import arrow from '../assets/images/arrow.png';




export default function HeroSection(){
    return(
        <div className='MainHero container my-10  mx-auto flex p-2 max-md:grid'>
            {/* start hero details  */}
            <div className='details  w-1/2 p-2 max-md:w-fit'>
                <h1 className='text-5xl mb-6 max-lg:text-3xl max-md:text-center'>التكنولوجيا بين يديك</h1>
                <p className='text-3xl max-xl:text-xl max-lg:text-base max-md:text-center'>انطلق في رحلتك التعليمية مع أحدث الادوات  التقنيات الحديثة، حيث يلتقي الشغف بالابتكار، و يتحول 
                    الطموح الى انجاز في منصتنا، نوفر لك بيئة تفاعلية متكاملة تمكنك 
                    من استكشاف مجالات التكنولوجيا المختلفة، و التعلم من نخبة من الخبراء، و بناء مستقبلك بخطوات واثقة
                </p>

                <div className="relative flex flex-col  w-2/5 max-2xl:w-60 max-md:mx-auto max-md:text-center">
                        {/* صورة السهم */}
                        <img src={arrow} alt="سهم يشير إلى الزر"  className="absolute -left-3 -bottom-1  max-2xl:-left-15 max-2xl:top-1/3" />
                        {/* الفقرة */}
                        <p className='text-xl text-gray-500 my-4 max-xl:text-lg max-sm:my-2 max-sm:text-base'>
                            خطوة واحدة تفصلك عن التفوق
                        </p>
                        {/* الزر */}
                        <NavLink to="/">
                            <button className='bg-blue-900 py-3 px-7 my-2  text-lg text-blue-50 rounded-md hover:bg-cyan-700 '>
                                ابدأ رحلتك الآن
                            </button>
                        </NavLink>
                    </div>
            </div>
            {/* end hero details  */}

            {/* start hero image  */}
            <div className='HeroImage  w-1/2 max-md:w-fit max-md:my-2 max-md:mx-auto'>
                <img src={HeroImage} className='m-auto'/>
            </div>
            {/* end hero image  */}

        </div>
    )
}