import React from "react"
import { FaShoppingCart } from "react-icons/fa";
const Menue = () => {
    const productImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vr1iuBO5j-mnFjC2qBw8B9cX3IRq8--QuIZTVLd9mGHqR8YsAtAtVti2Y_Js1LZOAcM&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs22ccXdqwQCMgN4rdHFMDW_1b53YpexRTVxaoHTah0T_xRnP0DeprVJiBilJyugYG6s&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-67i4XDLi8S756lsDtyZjnazU3GZamX4Ag&s",
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_chocolate_cake_-dc42364.jpg?quality=90&resize=500,454",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbYKCS4FXYqMzxW_oaGtHv7zGvI8r6TxfTMNzDWiLcV5_ce6K1L-sFukKzvAtAYg0zOc&usqp=CAU",
        "https://static.wixstatic.com/media/29dfd3_e9a5f3b310a34f1499b80cd429816165~mv2.jpg/v1/fill/w_600,h_400,al_c,lg_1,q_80/29dfd3_e9a5f3b310a34f1499b80cd429816165~mv2.jpg"
    ];

    return (
        <div className='relative text-center p-10'>
            <div className='absolute inset-0'
                style={{
                    backgroundImage:`url('https://i.pinimg.com/originals/49/d8/9c/49d89ccbbfef5619936121f00c6b21ba.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.7,
                }} />
            <h1 className='font-bol text-7xl mb-4 text-red-900 z-10 relative'>Most Demanded Item</h1>
            <h1 className='text-4xl text-red-700 z-10 relative'>Order Now...!</h1>

            <section
                id='Projects'
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:bg-sky-100 z-10 relative">
                        <a href="#">
                            <img
                                src={productImages[index]}
                                alt={`Product ${index + 1}`}
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-slate-800 mr-3 uppercase text-xs">Category</span>
                                <p className="text-lg font-bold text-red-700 truncate block capitalize">Chocolate Cake</p>
                                <h2 className="text-red-800 bold">
                                 Card number {index + 1}   
                                </h2>
                                <p className="text-yellow-700">Tastes as good as it looks.
                                     It is a classic moist chocolate cake layered with rich and silky chocolate buttercream.</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-bold text-red-900 my-3 cursor-auto">
                                    $10
                                    </p>
                                    <del>

                                        <br />
                                        <p className="text-sm text-blue-700 cursor-auto ml-2">{""} $12</p>
                                    </del>
                                    <div className="ml-auto">
                                        <FaShoppingCart className="w-5  h-5 text-blue-800" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    )

}
export default Menue 
