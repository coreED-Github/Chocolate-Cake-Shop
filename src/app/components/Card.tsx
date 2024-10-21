import React from 'react';


const Content = () => {
    return (
        <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 md:pr-10'>
                <h2 className='text-3xl font-bold mb-4 text-red-700'>
                    Delicious Chocolate Cake{" "}
                    {" "}
                </h2>
                <p className='text-black mb-4'>
                    {" "}
                    Celebrate moments big and small with our decadent cakes, each slice is a heavenly journey into the world of sweet indulgence.
                </p>
                <button className='bg-orange-500 text-amber-50 px-4 py-2 roundede hover:bg-orange-800 transition duration-200'>
                    Order Now
                </button>
                <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-red-700'>
                    {" "}
                    Coming Soon: Our New Deal Launches{" "}
                </h3>

                <ul>

                    <li>
                        {" "}
                        <strong>Cappuccino Cake:</strong>
                        A cake for all coffee lovers out there!
                        It is a delicate cake with intense coffee flavored frosting as if you have had a cappuccino.
                    </li>
                    <br />

                    <li>
                        {" "}
                        <strong>Triple Layer Chocolate Cake:</strong>
                        A cake made with three types of premium chocolate is the ultimate treat for a chocoholic,
                        there dark, milk, and white chocolate in layers of the cake.
                    </li>
                    <br />

                    <li>
                        {" "}
                        <strong>Chocolate Fudge Cake:</strong>
                        Indulge in our Chocolate Fudge Cake. the perfect delight for birthdays! Moist, rich,
                        and oh so chocolatey, it is a dream come true for chocolate enthusiasts.
                    </li>
                    <br />
                </ul>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfkaRy9f-fylXjAKRjqtA-_b42vFTyG1kqA&s"
                    alt="delicious cake"
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
                />
            </div>
        </section>
    )
}
export default Content