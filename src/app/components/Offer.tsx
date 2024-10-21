'use client'
import React from 'react'
 type Offer ={
    title: string;
    description:string;
 }
 const SpecialOffer:React.FC =()=>{
    const offer:Offer[]=[
        {
            title:"Big Deal",
            description:'Now get 40% off on purchase up to 5000 rupees.',
        },
        {
            title:"Celebration Deal",
            description:'Get up to 1000 worth of party supplies ater three time purchases.',
        },
        {
            title:"Student Deal",
            description:'Get a mini cake with 30% discount from 12pm to 9pm.',
        },
        {
            title:"Special Deal",
            description:'Add your name one luck coupon & get absolutely free cake.'
        },


    ];

const handleOfferClick =(description: string)=>{
    alert(description)
}
    return(
        <section className='py-10'>
            <div className='container mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-6 text-yellow-900'>Special Offer Only For Chocolate Lover</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-col-3 gap-6'>
                {offer.map((offer,index) => (
                    <button key={index}
                    onClick={()=>handleOfferClick(offer.description)}
                    className='bg-gray-200 shadow-lg rounded-lg text-center hover:bg-cyan-200 transition duration-300 transform hover:scale-105'>
                   <h3 className='text-2xl font-semibold text-red-900'>{offer.title}</h3>
                   <p className='text-red-800 mt-3'>{offer.description}</p>
                    </button>
                )
                
                )}
                 
            </div>
            </div> 
        </section>
    )
 }
 export default SpecialOffer