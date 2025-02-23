import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-lime-500 m-3'>
                This is myApp page
            </h1>
            <Link href="/yourApp" className='border-2 border-lime-500 px-5 py-3 block w-max m-3 rounded-full text-lime-500 font-bold hover:bg-lime-500 hover:text-white hover:shadow-md hover:shadow-lime-500'>
                Your App
            </Link>
        </div>
    );
};

export default page;