import React from 'react'
export default function Carousel() {
    return (
        <div>
            <section className='bg-gradient-to-r from-black to-'>
                <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-yellow-700 h-auto md:h-full flex flex-col'>
                            <a href=''
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                                <img src="https://shop.aubree.in/cdn/shop/files/WhatsAppImage2023-09-27at5.50.09PM_1_1024x1024.jpg?v=1695820461"
                                    alt="cookies and creamy layer cake"
                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105  transition-transform duration-500 ease-in-out' />
                                <div className='absolute inset-0 bd-gradient-to-b from-grey-900/5'>
                                </div>
                                <h3 className='z-20 text-1xl text-medium text-white absolute top-1 left-2 p-15 xs:text-xl md:text-0xl'>Classic Loaded site
                                </h3>
                            </a>
                        </div>
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-yellow-700 h-auto md:h-full flex flex-col'>
                            <a href=''
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                                <img src="https://img.pikbest.com/ai/illus_our/20230423/5303eb34964940f14dc4caf615a9aa77.jpg!w700wp"
                                    alt="cookies and creamy layer cake"
                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105  transition-transform duration-500 ease-in-out' />
                                <div className='absolute inset-0 bd-gradient-to-b from-grey-900/5'>
                                </div>
                                <h3 className='z-20 text-1xl text-medium text-white absolute top-1 left-2 p-15 xs:text-xl md:text-0xl'>Taste with Berries
                                </h3>
                            </a>
                        </div>
                        <div className="grid  gap-4 grid-cols-2 sm-grid-col-2 lg:grid-cols-2">
                            <a href=""

                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hGdSsTCLn57ul9MUyXzhmjBo1IT7xUdBGg&s"

                                    alt="black vintage cake"
                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transorm duration-500 ease-in-out' />
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                                <h3 className='z-20 text-1xl text-medium text-white absolute top-1 left-2 p-15 xs:text-xl md:text-0xl'>Mini Balls</h3>
                            </a>
                            <a href=''
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OjQzi0feIqUWqCnaSV5L86BT6Jg6dAdXwA&s"

                                    alt="black vintage cake"
                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transorm duration-500 ease-in-out' />
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                                <h3 className='z-20 text-1xl text-medium text-white absolute top-1 left-2 p-15 xs:text-xl md:text-0xl'>Mini Peanut Butter Blast</h3>



                            </a>




                        </div>









                    </div>
                </div>
            </section>
        </div>
    )
}
