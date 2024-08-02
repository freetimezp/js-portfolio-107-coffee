import React from 'react';

import Separator from './Separator';
import MenuItem from './MenuItem';

const menuItems = [
    {
        srcImg: "/assets/menu/coffee-1.png",
        name: "Espresso",
        description: "Rich and bold shot of coffee",
        price: 3.3,
    },
    {
        srcImg: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: 4.7,
    },
    {
        srcImg: "/assets/menu/coffee-3.png",
        name: "Latte",
        description: "Espresso with steamed milk",
        price: 4.1,
    },
    {
        srcImg: "/assets/menu/coffee-4.png",
        name: "Americano",
        description: "Espresso with hot water",
        price: 3.5,
    },
    {
        srcImg: "/assets/menu/coffee-5.png",
        name: "Mocha",
        description: "Espresso with chocolate steamed milk",
        price: 5.4,
    },
    {
        srcImg: "/assets/menu/coffee-1.png",
        name: "Macchiato",
        description: "Espresso with a dollop of foam",
        price: 3.7,
    },
    {
        srcImg: "/assets/menu/coffee-2.png",
        name: "Flat White",
        description: "Espresso with microfoam milk",
        price: 3.9,
    },
    {
        srcImg: "/assets/menu/coffee-3.png",
        name: "Iced Coffee",
        description: "Chilled coffe over ice",
        price: 4.25,
    },
    {
        srcImg: "/assets/menu/coffee-4.png",
        name: "Affogato",
        description: "Espresso shot over vanilla ice cream",
        price: 4.5,
    },
    {
        srcImg: "/assets/menu/coffee-5.png",
        name: "Irish Coffee",
        description: "Coffee with Irish whiskey and cream",
        price: 5.25,
    },
];

const Menu = () => {
    return (
        <section className='pt-12 pb-16 xl:pt-16 xl:pb-36'>
            <div className="container mx-auto">
                <div className='flex flex-col gap-4 mb-12 xl:mb-24'>
                    <h2 className='h2 text-center'>
                        Our Menu
                    </h2>

                    <div className='mb-4'>
                        <Separator bg="accent" />
                    </div>

                    <p className='text-center max-w-[620px] mx-auto'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
                        quam sapiente praesentium repellendus alias quod facere et accusamus
                        quaerat, officia cum nemo.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-12 xl:gap-24'>
                    {/* menu */}
                    <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16
                        place-content-center'>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} {...item} />
                        ))}
                    </div>

                    <button className='btn'>
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Menu;
