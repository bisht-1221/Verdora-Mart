import React from 'react'
import Heading from '../heading/Heading'
import fv from '../../assets/fruits-and-veggies.png'
import d1 from '../../assets/d4.png'
import imain1 from '../../assets/a2.png'
import Button from '../Button/Button'

// ✅ FIX: moved array to top so it's available when rendercards runs
const categories = [
    {
        id: 1,
        title: 'Fruits & Vegetables',
        description:
            'Fresh fruits and vegetables, handpicked daily to bring health, freshness, and natural taste right to your doorstep 🍎🥕🌿',
        image: fv
    },
    {
        id: 2,
        title: 'Dairy Products',
        description:
            'Fresh and creamy dairy products made to bring purity, taste, and nutrition to your everyday life 🥛🧈🧀',
        image: d1
    },
    {
        id: 3,
        title: 'Icecream & Chocolates',
        description:
            'Indulge in rich chocolates and creamy ice creams crafted to satisfy every sweet craving with delicious flavors and irresistible freshness 🍫🍦',
        image: imain1
    },
]

const Category = () => {

    const rendercards = categories.map((card) => (
        <div
            className='group flex-1 basis-[320px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3'
            key={card.id}
        >
            {/* card image */}
            <div className='w-full min-h-[260px] relative bg-gradient-to-b from-orange-50 to-orange-100 overflow-hidden'>
                <img
                    src={card.image}
                    alt={card.title}
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] object-contain transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2'
                />
            </div>

            {/* card content */}
            <div className='p-8 text-center'>
                <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                <p className='text-zinc-600 mt-4 mb-8 leading-7'>{card.description}</p>
                <div className="flex justify-center">
                    <Button content="See All" />
                </div>
            </div>
        </div>
    ))

    return (
        <section className='w-full overflow-hidden'>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Shop by Category" />
                <div className='flex flex-wrap justify-center gap-10 mt-16'>
                    {rendercards}
                </div>
            </div>
        </section>
    )
}

export default Category
