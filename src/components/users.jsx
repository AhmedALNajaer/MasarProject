import React from 'react'






export default function Users (){
    return(
        <div className='mainUsers my-25 '>
            {/* start title  */}
            <div className=' container m-auto text-center'>
                <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
                    آراء المستخدمين
                </h1>
                <p className='mt-4 max-w-2xl text-xl text-gray-600  m-auto'>
                الرضا التام للمستخدمين هو ما يساعدنا على النمو
                </p>
            </div>
            {/* end title  */}


            {/* start all rev  */}
            <div className='allRev my-10  w-[40%] mx-auto 
             max-xl:w-[60%] max-md:w-[80%]'>
                {/* start user rev  */}
                <div className='userRev  flex m-auto p-3  '>
                    {/* image  */}
                    <div className='bg-blue-500 w-25 h-25 rounded-full '>
                        <img src="" alt="" />
                    </div>
                    {/* details  */}
                    <div className='mr-5'>
                        <h1 className='text-2xl font-bold max-lg:text-lg'>اسم المستخدم</h1>
                        <p className='text-xl mt-5 max-lg:text-lg'>منصة مفيدة جداً وتحتوي على كل شيء يتعلق بجميع المساقات</p>
                    </div>
                </div>
                {/* end user rev  */}

                {/* start user rev  */}
                <div className='userRev  flex m-auto p-3  '>
                    {/* image  */}
                    <div className='bg-blue-600 w-25 h-25 rounded-full '>
                        <img src="" alt="" />
                    </div>
                    {/* details  */}
                    <div className='mr-5'>
                        <h1 className='text-2xl font-bold max-lg:text-lg'>اسم المستخدم</h1>
                        <p className='text-xl mt-5 max-lg:text-lg'>منصة مفيدة جداً وتحتوي على كل شيء يتعلق بجميع المساقات</p>
                    </div>
                </div>
                {/* end user rev  */}

                {/* start user rev  */}
                <div className='userRev  flex m-auto p-3  '>
                    {/* image  */}
                    <div className='bg-blue-700 w-25 h-25 rounded-full '>
                        <img src="" alt="" />
                    </div>
                    {/* details  */}
                    <div className='mr-5'>
                        <h1 className='text-2xl font-bold max-lg:text-lg'>اسم المستخدم</h1>
                        <p className='text-xl mt-5 max-lg:text-lg'>منصة مفيدة جداً وتحتوي على كل شيء يتعلق بجميع المساقات</p>
                    </div>
                </div>
                {/* end user rev  */}

                
            </div>
            {/* end all rev  */}
        </div>
    )
}