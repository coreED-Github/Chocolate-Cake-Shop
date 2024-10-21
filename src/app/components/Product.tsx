import React from 'react'
const products = [
    {
        id: 1,
        title: "Vegan Chocolate Cake",
        category: "fixing",
        price: "2999.00",
        imageUrl: "https://theloopywhisk.com/wp-content/uploads/2018/11/Vegan-Chocolate-Truffle-Cake_730px-featured.jpg",
        bgcolor: "bg-yellow-900"
    },
    {
        id: 2,
        title: "Chocolate Overloaded Cake",
        category: "fixing",
        price: "3599.00",
        imageUrl: "https://liliyum.com/cdn/shop/products/Fullchocolatecake_720x.jpg?v=1632213255",
        bgcolor: "bg-yellow-900"
    },
    {
        id: 3,
        title: "Two Tier Dark Chocolate Cake",
        category: "fixing",
        price: "4599.00",
        imageUrl: "https://www.cakeie.com/public/images/2%20Tier%20Dark%20Chocolate%20Cake-img1-cakeie.webp",
        bgcolor: "bg-yellow-900"
    },



];

export default function Product() {
    return (
        <div className='p-1 flex flex-wrap items-center justify-center mb-2'>
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`shrink-0 m-3 relative overflow-hidden ${product.bgcolor} rounded-lg shadow-lggroup max-w-sm`}
                >
                    <svg
                        className='absolute bottom-0 left-8 mb-6 scale-1152 group:hover:scale-[1.65] transition-transform'
                        viewBox='0 0 375 283'
                        fill='none'
                        style={{ opacity: 0.1 }}>
                        <rect
                            x="159.52"
                            y="152"
                            height="152"
                            width="152"
                            rx="8"
                            transform='rotate(-45 159.52 175)'
                            fill='white' />
                        <rect
                            y="107.48"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className='relative pt-2 px-2 flex items-center justify-center group-hover:scale-110 transition-transform'>
                        <div
                            className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                            style={{
                                background: "radial-gradient (black, transparent 60%",
                                transform: "rotate3d 0 ,0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: 0.2,
                            }}>
                        </div>
                        <img className="relative w-50"
                            src={product.imageUrl}
                            alt={product.title} />
                    </div>
                    <div className='relative text-white px-3 pb-3 mt-3'>
                        <span className='block opacity-75 -mb-1'>{product.category}</span>
                        <div className='flex justify-between'>
                            <span className='block font-semibold text-xl'>
                                {product.title}
                            </span>
                            <span className='block bg-red-200 rounded-2xl text-red-500 text-xs font-bold px-1 py-1 leading-none items-center'>
                                {product.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
